import type { Metadata } from "next"
import { Pacifico, Quicksand } from "next/font/google"
import "./globals.css"
import AppProvider from "./AppProvider"
import { ModeToggle } from "@/components/toggle/ModeToggle"
import { Toaster } from "sonner"

const pacificoLogo = Pacifico({
  variable: "--font-pacifico-logo",
  subsets: ["latin"],
  weight: ["400"]
})

const quickSand = Quicksand({
  variable: "--font-quick-sand",
  subsets: ["latin"],
})

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${pacificoLogo.variable} ${quickSand.variable} antialiased`}
      >
        <AppProvider>
          {children}
          <ModeToggle />
          <Toaster richColors/>
        </AppProvider>
      </body>
    </html>
  )
}
