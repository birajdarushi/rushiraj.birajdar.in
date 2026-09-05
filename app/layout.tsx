import type { Metadata } from "next"
import {
  Bricolage_Grotesque,
  Fraunces,
  Hanken_Grotesk,
  Shantell_Sans,
  Space_Mono,
} from "next/font/google"
import { ThemeProvider } from "@/components/theme/ThemeProvider"
import { profile } from "@/lib/profile"
import "./globals.css"

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"],
})

const body = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
})

const mono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "700"],
})

const hand = Shantell_Sans({
  subsets: ["latin"],
  variable: "--font-hand",
  weight: ["500", "600"],
})

const wordmark = Fraunces({
  subsets: ["latin"],
  variable: "--font-wordmark",
  axes: ["SOFT", "WONK", "opsz"],
})

export const metadata: Metadata = {
  title: {
    default: `${profile.name} · QA Automation Engineer`,
    template: `%s · ${profile.name}`,
  },
  description: profile.heroTagline,
  metadataBase: new URL("https://rushiraj.birajdar.in"),
  openGraph: {
    title: `${profile.name} · ${profile.title}`,
    description: profile.heroTagline,
    locale: "en_IN",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} ${hand.variable} ${wordmark.variable}`}
      data-scroll-behavior="smooth"
      data-theme="light"
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
