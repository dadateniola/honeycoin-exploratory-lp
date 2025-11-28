// Images
import { RvysionLogo } from "../svg/svg";

// Imports
import clsx from "clsx";
import CTA from "../cta/cta";
import { FOOTER_DATA } from "./data";
import { FooterCard } from "./components";
import { SECTION_HEADING_CLASS } from "../global/data";

const Footer = () => {
  return (
    <section id="footer">
      <div className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0"></div>

        <div className="relative h-[1300px] p-10">
          <div className="size-full custom-flex-col justify-between gap-20">
            <div></div>

            <div className="flex gap-10">
              {/* Content */}
              <div className="flex-1 min-w-0 custom-flex-col gap-6">
                <div className="custom-flex-col gap-4">
                  <div className="flex">
                    <RvysionLogo />
                  </div>
                  <h3 className={SECTION_HEADING_CLASS}>
                    Everything works better when money flows.
                  </h3>
                </div>

                <p className="-tracking-[0.16px] leading-[135%]">
                  We help you make that flow simple, stable, and beautifully
                  obvious.
                </p>

                <div className="flex">
                  <CTA href="" color="#134E64">
                    PROJECT DETAILS
                  </CTA>
                </div>
              </div>

              {/* Links */}
              <div className="flex-1 min-w-0 grid grid-cols-2 gap-3">
                {FOOTER_DATA.map((data, index) => (
                  <FooterCard key={index} {...data} />
                ))}
              </div>
            </div>

            <div
              className={clsx(
                "flex justify-between gap-10",
                "font-medium -tracking-[0.16px] leading-[135%]"
              )}
            >
              <p>© Rvysion. 2025. All rights reserved.</p>
              <p>Privacy Policy • Terms of Service • Security</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
