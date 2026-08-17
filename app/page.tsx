import { SiteHeader } from '@/components/site-header'
import { HeroSection } from '@/components/hero-section'
import { ApproachSection } from '@/components/approach-section'
import { AboutSection } from '@/components/about-section'
import { ServicesSection } from '@/components/services-section'
import { CredentialsSection } from '@/components/credentials-section'
import { CtaSection } from '@/components/cta-section'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <SiteHeader />
      <HeroSection />
      <ApproachSection />
      <AboutSection />
      <ServicesSection />
      <CredentialsSection />
      <CtaSection />
      <SiteFooter />
    </main>
  )
}
