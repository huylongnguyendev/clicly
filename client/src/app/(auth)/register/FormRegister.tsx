"use client"

import ConfirmField from "@/components/fields/ConfirmField"
import PasswordField from "@/components/fields/PasswordField"
import PhoneField from "@/components/fields/PhoneField"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { Spinner } from "@/components/ui/spinner"
import { RegisterSchema } from "@/lib/schema/register.schema"
import { RegisterFormType, RegisterType } from "@/lib/types/form.type"
import { Role } from "@/lib/types/user.type"
import { FormParser } from "@/middleware/form.middleware"
import { authService } from "@/services/auth.service"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

export default function FormRegister() {
  const router = useRouter()

  const form = useForm<RegisterFormType>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      phone: "",
      password: "",
      confirm: "",
      role: Role.CUSTOMER
    }
  })

  const onSubmit = async (data: RegisterFormType) => {
    const payload: RegisterType = FormParser.register(data)

    try {
      const res = await authService.register(payload)
      toast.success(res.message)
      router.push("login")
    } catch (error: any) {
      if (error.response)
        toast.error(error.response.data?.message ?? "Đăng nhập thất bại")
      else
        toast.error(error.message ?? "Không thể kết nối, vui lòng kiểm tra lại internet")
    }
  }

  return (
    <>
      <Form {...form} >
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-10"
        >
          <PhoneField />
          <PasswordField placeholder="Tạo mật khẩu mới" />
          <ConfirmField />
          <p className="text-accent-foreground text-xs font-semibold">Bằng cách nhấn Đăng ký, bạn đồng ý với các Chính sách bảo mật và Điều khoản của chúng tôi</p>
          <Button
            className="w-full"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting && <Spinner /> || "Đăng ký"}
          </Button>
        </form>
      </Form>
    </>
  )
}
