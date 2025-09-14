import Footer from "~/components/layout/footer";
import Navbar from "~/components/layout/navbar";
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
import Testimonials from "~/components/sections/testimonials";

export function LandingPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Brand />
      <Team />
      <Chat />
      <Insights />
      <Presentation />
      <Features />
      <Steps />
      <Ads />
      <Testimonials />
      <Steps />
      <CTA />
      <Footer />
      {/* Cookie Banner */}
      <div className="ck-cookie-w">
        <div className="ck-css-styles w-embed">
          <style>
            {`
              .ck-preference__bg {
                -webkit-backdrop-filter: blur(0.75rem);
                backdrop-filter: blur(0.75rem);
              }
              .ck-preference__scroll-w::-webkit-scrollbar {
                display: none;
              }
              .ck-preference__scroll-w {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
              .w--redirected-focus {
                box-shadow: none !important;
              }
            `}
          </style>
        </div>
        <div fs-cc="banner" className="ck-modal">
          <div className="ck-modal-content">
            <div className="global-headline-xxs is-left-aligned is-white">Cookie Einstellungen</div>
            <div className="copytext is-left-aligned is-white">Wenn Sie auf „Akzeptieren“ klicken, stimmen Sie der Speicherung von Cookies auf Ihrem Gerät zu, um die Navigation auf der Website zu verbessern, die Nutzung der Website zu analysieren und unsere Marketingaktivitäten zu unterstützen.</div>
            <div className="global-subline-div _1">
              <div className="align-horizontally g-0 _w-100 cookies">
                <a fs-cc="allow" data-w-id="180ebe81-3829-0966-47ae-21c421b11b95" href="#" className="primary-btn is-white w-inline-block">
                  <div className="btn-txt-div">
                    <div className="btn-txt is-black">Akzeptieren</div>
                    <div className="btn-txt is-black">Akzeptieren</div>
                  </div>
                </a>
                <a fs-cc="deny" href="#" className="cookie-deny w-inline-block">
                  <div className="ck-button__txt second">Ablehnen</div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}