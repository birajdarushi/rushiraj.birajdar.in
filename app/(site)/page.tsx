import { About } from "@/components/home/About"
import { Contact } from "@/components/home/Contact"
import { Hero } from "@/components/home/Hero"
import { ProofStrip } from "@/components/home/ProofStrip"
import { Skills } from "@/components/home/Skills"
import { WhatIDo } from "@/components/home/WhatIDo"
import { Work } from "@/components/home/Work"

export const dynamic = "force-dynamic"

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <WhatIDo />
      <Work />
      <About />
      <Skills />
      <Contact />
    </>
  )
}
