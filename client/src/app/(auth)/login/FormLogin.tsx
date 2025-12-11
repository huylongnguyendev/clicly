"use client"
import { Form } from "@/components/ui/form"
import { LoginFormType, LoginType } from "@/lib/types/form.type"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion } from "framer-motion"
import PhoneField from "@/components/fields/PhoneField"
import PasswordField from "@/components/fields/PasswordField"
import { Button } from "@/components/ui/button"
import { authService } from "@/services/auth.service"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { Spinner } from "@/components/ui/spinner"
import { LoginSchema } from "@/lib/schema/login.schema"
import CheckField from "@/components/fields/CheckField"
import Link from "next/link"
import { useAppDispatch } from "@/lib/hooks/redux.hook"
import { setUser } from "@/store/slices/login.slice"

export default function FormLogin() {
  const dispatch = useAppDispatch()
  const router = useRouter()

  const form = useForm<LoginFormType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      phone: "",
      password: "",
      remember: false
    }
  })

  const onSubmit = async (data: LoginFormType) => {
    const { phone, password, remember } = data
    const payload: LoginType = { phone, password, remember }

    try {
      const res = await authService.login(payload)
      await dispatch(setUser(res))
      toast.success(res.message)
      router.push("/")
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
          <PhoneField />
          <PasswordField placeholder="Nhập mật khẩu của bạn" />

          <div className="flex justify-between items-center">
            <CheckField />
            <Link
              href="/reset-password"
              className="text-sm font-semibold text-primary"
            >Quên mật khẩu?</Link>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={form.formState.isSubmitting}
          >
            {form.formState.isSubmitting ? <Spinner /> : "Đăng nhập"}
          </Button>
        </motion.form>
      </Form>
    </>
  )
}
