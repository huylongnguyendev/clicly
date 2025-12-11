import Logo from "@/components/Logo"
import Link from "next/link"
import FormLogin from "./FormLogin"

export default function Register() {
  return (
    <>
      <div
        className="w-full max-w-md h-dvh mx-auto flex flex-col justify-between py-4"
      >
        <div className="space-y-4">
          <Logo className="text-center" />
          <h1 className="font-semibold text-base text-center">
            Chào mừng bạn, hãy <span className="text-primary">Đăng nhập</span> vào tài khoản của bạn
          </h1>
        </div>
        <FormLogin />
        <p className="text-center font-semibold space-x-1">
          <span>Chưa có tài khoản?</span>
          <Link
            href="register"
            className="text-primary"
          >
            Đăng ký ngay
          </Link>
        </p>
      </div>
    </>
  )
}