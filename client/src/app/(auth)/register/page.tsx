import Logo from "@/components/Logo"
import FormRegister from "./FormRegister"
import Link from "next/link"

export default function Register() {
  return (
    <>
      <div
        className="w-full max-w-md h-dvh mx-auto flex flex-col justify-between py-4"
      >
        <div className="space-y-4">
          <Logo className="text-center" />
          <h1 className="font-semibold text-lg text-center">
            Chào mừng bạn, hãy <span className="text-primary">Đăng ký</span> tài khoản mới
          </h1>
        </div>
        <FormRegister />
        <p className="text-center font-semibold space-x-1">
          <span>Đã có tài khoản?</span>
          <Link
            href="login"
            className="text-primary"
          >
            Đăng nhập ngay
          </Link>
        </p>
      </div>
    </>
  )
}
