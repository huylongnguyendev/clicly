import StoreProvider from "@/lib/providers/StoreProvider"
import { ThemeProvider } from "@/lib/providers/ThemeProvider"

export default function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    // <StoreProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    // </StoreProvider>
  )
}
