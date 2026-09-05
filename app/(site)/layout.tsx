import { Footer } from "@/components/layout/Footer"
import { SkyDecor } from "@/components/layout/SkyDecor"
import { Topbar } from "@/components/layout/Topbar"

/** Public marketing site chrome */
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <SkyDecor />
      <Topbar />
      <main className="relative z-10 overflow-x-hidden">{children}</main>
      <Footer />
    </>
  )
}
