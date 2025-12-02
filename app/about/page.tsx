// Images
import { AboutArrow } from "@/components/svg/svg";

// Imports
import clsx from "clsx";
import CTA from "@/components/cta/cta";

import {
  BRAND_LOGOS_MAP,
  SECTION_HEADING_CLASS,
} from "@/components/global/data";

import AltCTA from "@/components/cta/alt-cta";
import { typedEntries } from "@/utils/typedEntries";
import { BRAND_LOGO_CLASS } from "@/components/about/data";
import PinnedUntilFooter from "@/components/footer/pinned-until-footer";

const About = () => {
  return (
    <>
      <PinnedUntilFooter>
        <section id="about-us">
          <div className="relative w-full bg-background">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-[110%] bg-primary"
                style={{ clipPath: "ellipse(100% 100% at 100% 100%)" }}
              ></div>
            </div>

            {/* Content */}
            <div className="relative p-10 pt-[200px] custom-flex-col gap-[60px]">
              <div className="flex gap-8">
                <div className="flex-1 min-w-0">
                  <div className="w-full max-w-[800px] flex flex-col gap-4">
                    <h1
                      className={clsx(
                        "w-full max-w-[477px]",
                        SECTION_HEADING_CLASS
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

                    <div className="flex gap-5">
                      <CTA href="https://www.rvysion.co/works" color="#8066CC">
                        VIEW RVYSION PORTFOLIO
                      </CTA>

                      <AltCTA href="https://honeycoin.app/">
                        VISIT HONEYCOIN WEBSITE
                      </AltCTA>
                    </div>
                  </div>
                </div>

                <div className="pr-[50px] flex items-end">
                  <AboutArrow />
                </div>
              </div>

              <div className="custom-flex-col gap-10">
                <p className="text-white/90 text-xl font-semibold -tracking-[0.2px] leading-[150%]">
                  BRANDS WE&apos;VE WORKED WITH:
                </p>

                <div className="grid grid-cols-4 gap-3">
                  {typedEntries(BRAND_LOGOS_MAP).map(([key, Logo], index) => (
                    <div
                      key={index}
                      className="w-full h-[200px] p-5 custom-flex-center bg-about-card-bg rounded-[10px] overflow-hidden"
                    >
                      <Logo className={BRAND_LOGO_CLASS[key]} />
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
