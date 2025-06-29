import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Vlock Constructora - Construimos el Futuro con Excelencia",
  description:
    "Empresa constructora con más de 10 años de experiencia. Especialistas en obra civil, industrial y desarrollos sustentables.",
  icons: {
    icon: "/icon.svg",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="light" storageKey="vlock-ui-theme">
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
