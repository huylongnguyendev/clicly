"use client"
import { Form } from "@/components/ui/form"
import { RegisterFormType, RegisterType } from "@/lib/types/form.type"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { RegisterSchema } from "@/lib/schema/register.schema"
import { Role } from "@/lib/types/user.type"
import { motion } from "framer-motion"
import PhoneField from "@/components/fields/PhoneField"
import PasswordField from "@/components/fields/PasswordField"
import ConfirmField from "@/components/fields/ConfirmField"
import { Button } from "@/components/ui/button"
import InputField from "@/components/fields/InputField"
import { authService } from "@/services/auth.service"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { Spinner } from "@/components/ui/spinner"

export default function FormRegister() {
  const router = useRouter()

  const form = useForm<RegisterFormType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      password: "",
      confirm: "",
      role: Role.CUSTOMER
    }
  })

  const onSubmit = async (data: RegisterFormType) => {
    const { phone, password, role, fullName } = data
    const payload: RegisterType = { phone, password, role, fullName }
    
    try {
      const res = await authService.register(payload)
      toast.success(res.message)
      router.push("/login")
    } catch (error: any) {
      if (error.response)
        toast.error(error.response.data.message)
      else
        toast.error(error.message ?? "Lỗi kết nối! Vui lòng kiểm tra lại")
    }
  }

  return (
    <>
      <Form {...form}>
        <motion.form
          initial={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-10"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <InputField
            label="Họ tên"
            placeholder="Họ và tên của bạn"
            name="fullName"
          />
          <PhoneField />
          <PasswordField placeholder="Tạo mật khẩu mới"/>
          <ConfirmField />
          <div className="space-y-4">
            <p className="text-xs text-accent-foreground">
              Bằng cách nhấn nút Đăng ký, bạn đông ý với các Chính sách bảo mật và Điều khoản của chúng tôi
            </p>
            <Button
              type="submit"
              className="w-full"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? <Spinner /> : "Đăng ký"}
            </Button>
          </div>
        </motion.form>
      </Form>
    </>
  )
}
