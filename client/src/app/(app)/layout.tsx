import type { Metadata } from "next"
import Header from "@/components/header/Header"

export const metadata: Metadata = {
  title: "Clicly - Cửa hàng thời trang nam, nữ và trẻ em",
  description: "Clicly - Cửa hàng thời trang hiện đại. Sản phẩm chất lượng, mẫu mã đẹp hợp thời và đa dạng. Giao hàng nhanh chóng, chính sách đổi trả dễ dàng",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
    </>
  )
}
