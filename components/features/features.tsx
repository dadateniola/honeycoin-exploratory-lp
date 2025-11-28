// Imports
import clsx from "clsx";
import CTA from "../cta/cta";
import { FEATURES_DATA } from "./data";
import { FeaturesCard } from "./components";
import { CONTENT_CLASS } from "../global/data";
import { SectionHeading } from "../global/components";

const Features = () => {
  return (
    <section id="features">
      <div className={clsx(CONTENT_CLASS, "bg-primary")}>
        <div className="flex justify-center">
          <div className="w-full max-w-[720px] custom-flex-col gap-4">
            <SectionHeading title="Everything your business needs, in one platform" />

            <div className="flex justify-center">
              <CTA href="" color="#134E64">
                See All Features
              </CTA>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-[1020px] custom-flex-col gap-10">
            {FEATURES_DATA.map((feature, index) => (
              <FeaturesCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
