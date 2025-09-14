import Footer from "~/components/layout/footer";
import Navbar from "~/components/layout/navbar";
import { CookieBanner } from "~/components/modal/cookie-banner";
import Ads from "~/components/sections/ads";
import Brand from "~/components/sections/brand";
import Chat from "~/components/sections/chat";
import CTA from "~/components/sections/cta";
import Features from "~/components/sections/features";
import Hero from "~/components/sections/hero";
import Insights from "~/components/sections/insights";
import Presentation from "~/components/sections/presentation";
import Steps from "~/components/sections/steps";
import Team from "~/components/sections/team";

export function LandingPage() {
  return (
    <main className="global-body">
      <Navbar />
      <Hero />
      <Brand />
      <Team />
      <Presentation />
      <Features />
      <Chat />
      <Insights />
      <Ads />
      <Steps />
      <CTA />
      <Footer />
      <CookieBanner />
    </main>
  )
}