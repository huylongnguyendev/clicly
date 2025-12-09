import Logo from "@/components/Logo"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Logo />
      <Link href="register">
        Đăng ký
      </Link>
    </>
  )
}
