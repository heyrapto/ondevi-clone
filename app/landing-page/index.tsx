import Footer from "~/components/layout/footer";
import { Head } from "~/components/layout/head";
import Navbar from "~/components/layout/navbar";
import { CookieBanner } from "~/components/modal/cookie-banner";
import { CookieConsentScripts } from "~/components/scripts/cookie-consent";
import { ExternalScripts } from "~/components/scripts/external-scripts";
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
import { useEffect, useState } from "react";

const ClientOnlyWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className="global-body">{children}</div>;
  }

  return <LenisWrapper>{children}</LenisWrapper>;
};

const LenisWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // Dynamically import Lenis and GSAP only on client side
    const initClientSideFeatures = async () => {
      try {
        const LenisReact = (await import("lenis/react")).default;
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        
        gsap.registerPlugin(ScrollTrigger);
      } catch (error) {
        console.warn("Failed to load client-side features:", error);
      }
    };

    initClientSideFeatures();
  }, []);

  return <div className="global-body">{children}</div>;
};

export function LandingPage() {
  return (
    <>
      <Head />
      <ClientOnlyWrapper>
        <ExternalScripts />
        <CookieConsentScripts />
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
      </ClientOnlyWrapper>
    </>
  )
}