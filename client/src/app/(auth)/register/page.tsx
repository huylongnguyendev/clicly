import Logo from "@/components/Logo"
import FormRegister from "./FormRegister"
import Link from "next/link"

export default function Register() {
  return (
    <>
      <div className="h-dvh w-full max-w-lg mx-auto flex flex-col gap-12 py-32 justify-center items-center">
        <div className="space-y-8 text-center">
          <Logo />
          <p className="font-semibold">Chào mừng bạn, hãy <span className="font-semibold text-primary">đăng ký</span> tài khoản</p>
        </div>
        <FormRegister />
        <p className="text-center space-x-1 font-semibold">
          <span className="text-accent-foreground">Đã có tài khoản?</span>
          <Link
            href="login"
            className="text-primary dark:text-blue-400"
          >Đăng nhập tại đây</Link>
        </p>
      </div>
    </>
  )
}
