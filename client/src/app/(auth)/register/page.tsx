import Logo from "@/components/Logo"
import FormRegister from "./FormRegister"

export default function Register() {
  return (
    <>
      <div className="h-dvh w-full max-w-lg mx-auto flex flex-col gap-12 py-32 justify-center">
        <div className="space-y-8 text-center">
          <Logo />
          <p className="font-semibold">Chào mừng bạn, hãy đăng ký tài khoản</p>
        </div>
        <FormRegister />
      </div>
    </>
  )
}
