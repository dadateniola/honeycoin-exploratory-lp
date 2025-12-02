// Images
import { ShootingStarIcon } from "../svg/svg";

// Imports
import CTA from "../cta/cta";
import AltCTA from "../cta/alt-cta";
import { SectionHeading } from "../global/components";

const Hero = () => {
  return (
    <section id="hero">
      <div className="relative w-full h-screen bg-background">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-1/2 left-0 -translate-y-1/2 w-1/2 h-[110%] bg-primary"
            style={{ clipPath: "ellipse(80% 100% at 0% 100%)" }}
          ></div>
          <div
            className="absolute top-1/2 right-0 -translate-y-1/2 w-1/2 h-[105%] bg-primary"
            style={{ clipPath: "ellipse(80% 100% at 100% 100%)" }}
          ></div>
        </div>

        {/* Content */}
        <div className="relative pt-navbar-height flex justify-center">
          <div className="w-full max-w-[470px] custom-flex-col gap-5">
            <div className="custom-flex-col gap-4 text-center">
              {/* Badge */}
              <div className="flex justify-center">
                <div className="p-1 pr-5 flex items-center gap-2 bg-white/15 rounded-full">
                  <div className="py-1.5 px-2 flex items-center gap-1 bg-foreground rounded-full">
                    <ShootingStarIcon />
                    <p className="text-background text-sm leading-0">NEW</p>
                  </div>
                  <p className="text-secondary text-sm">
                    We&apos;ve closed a 9M Funding Round
                  </p>
                </div>
              </div>

              <SectionHeading
                title="Global money, made liquid"
                subtitle="Manage, swap, and grow with deep liquidity pools, multi-currency wallets, and effortless payouts — all in one place."
              />
            </div>

            {/* Actions */}
            <div className="flex justify-center gap-5">
              <CTA href="" color="#8066CC">
                GET STARTED
              </CTA>

              <AltCTA href="/about">ABOUT US</AltCTA>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
