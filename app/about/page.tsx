"use client";

import { useRef } from "react";

// Images
import { AboutArrow } from "@/components/svg/svg";

// Imports
import clsx from "clsx";
import CTA from "@/components/cta/cta";

import {
  BRAND_LOGOS_MAP,
  SECTION_HEADING_CLASS,
} from "@/components/global/data";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import { typedEntries } from "@/utils/typedEntries";
import { BRAND_LOGO_CLASS } from "@/components/about/data";
import PinnedUntilFooter from "@/components/footer/pinned-until-footer";

const About = () => {
  // Refs
  const contentRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const brandTitleRef = useRef<HTMLHeadingElement>(null);
  const brandCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Animations
  useGSAP(() => {
    gsap.registerPlugin(DrawSVGPlugin);

    const content = contentRef.current;
    const overlay = overlayRef.current;
    const brandCards = brandCardsRef.current;
    const brandTitle = brandTitleRef.current;
    const arrorPath = document.getElementById("about-arrow-path");

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.set(content, { autoAlpha: 0 })
      .set(brandTitle, { yPercent: 100 })
      .set(brandCards, { yPercent: 100 })
      .set(arrorPath, { drawSVG: 0 });

    tl.to(overlay, { scaleY: 0, ease: "expo.inOut", delay: 0.5, duration: 2 })
      .to(content, { autoAlpha: 1 }, "-=0.5")
      .to(arrorPath, { drawSVG: "100%", duration: 1 }, "<")
      .to(brandTitle, { yPercent: 0 })
      .to(brandCards, { yPercent: 0, stagger: 0.1 }, "<");

    tl.set(overlay, { display: "none", pointerEvents: "none" });
  }, []);

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed inset-0 w-screen h-screen bg-primary origin-bottom z-10" // Original state
      ></div>

      <PinnedUntilFooter>
        <section id="about-us">
          <div className="relative w-full bg-background">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute top-1/2 right-0 -translate-y-1/2 w-[110%] xs:w-[80%] md:w-1/2 h-[110%] bg-primary"
                style={{ clipPath: "ellipse(100% 100% at 100% 100%)" }}
              ></div>
            </div>

            {/* Content */}
            <div className="relative p-6 pt-[200px] md:p-10 md:pt-[200px] custom-flex-col gap-[60px]">
              <div className="flex gap-8">
                <div className="flex-1 min-w-0">
                  <div
                    ref={contentRef}
                    className="w-full max-w-[800px] flex flex-col gap-4"
                  >
                    <h1
                      className={clsx(
                        "w-full max-w-[477px]",
                        SECTION_HEADING_CLASS,
                      )}
                    >
                      About this exploration
                    </h1>

                    <p className="text-white/90 text-xl -tracking-[0.2px] leading-[150%]">
                      This landing experience was designed at Rvysion as a
                      creative exploration for HoneyCoin — showcasing how a more
                      expressive, illustration-led approach can help communicate
                      complex financial infrastructure with clarity and
                      confidence.
                      <br />
                      <br />
                      Our goal was to reimagine how multi-currency wallets,
                      liquidity access, virtual accounts, payouts, and
                      integrations could be explained visually, making the
                      product feel more intuitive, more human, and more premium.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5">
                      <CTA action={{ href: "https://www.rvysion.co/works" }}>
                        VIEW RVYSION PORTFOLIO
                      </CTA>
                      <CTA
                        variant="secondary"
                        action={{ href: "https://honeycoin.app/" }}
                      >
                        VISIT HONEYCOIN WEBSITE
                      </CTA>
                    </div>
                  </div>
                </div>

                <div className="max-lg:hidden pr-[50px] flex items-end">
                  <AboutArrow />
                </div>
              </div>

              <div className="custom-flex-col gap-10">
                <div className="overflow-hidden">
                  <p
                    ref={brandTitleRef}
                    className="text-white/90 text-xl font-semibold -tracking-[0.2px] leading-[150%]"
                  >
                    BRANDS WE&apos;VE WORKED WITH:
                  </p>
                </div>

                <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3">
                  {typedEntries(BRAND_LOGOS_MAP).map(([key, Logo], index) => (
                    <div key={index} className="size-full overflow-hidden">
                      <div
                        ref={(el) => void (brandCardsRef.current[index] = el)}
                        className="w-full h-[200px] p-5 custom-flex-center bg-about-card-bg rounded-[10px] overflow-hidden"
                      >
                        <Logo className={BRAND_LOGO_CLASS[key]} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </PinnedUntilFooter>
    </>
  );
};

export default About;
