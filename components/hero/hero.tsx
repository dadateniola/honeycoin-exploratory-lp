import Link from "next/link";

// Images
import { ArrowRightIcon, HeroCurve, ShootingStarIcon } from "../svg/svg";

// Imports
import CTA from "../cta/cta";

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-primary">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <HeroCurve className="size-full" />
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
                  <p className="text-background text-sm leading-none">NEW</p>
                </div>
                <p className="text-secondary text-sm">
                  We&apos;ve closed a 9M Funding Round
                </p>
              </div>
            </div>

            {/* Title & Subtitle */}
            <h1 className="text-secondary text-[68px] font-recoleta font-bold leading-[110%]">
              Global money, made liquid.
            </h1>
            <p className="text-white/90 -tracking-[0.16px]">
              Manage, swap, and grow with deep liquidity pools, multi-currency
              wallets, and effortless payouts — all in one place.
            </p>
          </div>

          {/* Actions */}
          <div className="flex justify-center gap-5">
            <CTA href="" color="#8066CC">
              GET STARTED
            </CTA>

            <Link
              href=""
              className="h-[52px] pl-5 pr-4 flex items-center gap-3 bg-white/10 rounded-lg"
            >
              <p className="font-semibold underline -tracking-[0.16px] whitespace-nowrap">
                ABOUT US
              </p>

              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
