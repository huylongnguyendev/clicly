import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Clicly - Đăng nhập hoặc đăng ký",
  description: "Clicly - Cửa hàng thời trang hiện đại. Sản phẩm chất lượng, mẫu mã đẹp hợp thời và đa dạng. Giao hàng nhanh chóng, chính sách đổi trả dễ dàng",
}

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="relative w-full h-dvh px-4">
      {children}
    </div>
  )
}