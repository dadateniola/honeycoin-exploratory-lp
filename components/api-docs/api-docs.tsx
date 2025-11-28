// Imports
import clsx from "clsx";
import CTA from "../cta/cta";
import { API_DOCS_DATA } from "./data";
import { ApiDocsCard } from "./components";
import { CONTENT_CLASS } from "../global/data";
import { SectionHeading } from "../global/components";

const ApiDocs = () => {
  return (
    <section id="api-docs">
      <div className={clsx(CONTENT_CLASS, "bg-background")}>
        <div className="flex justify-center">
          <div className="w-full max-w-[700px] custom-flex-col gap-4">
            <SectionHeading
              title="Built for scale, designed for speed"
              subtitle="Seamlessly integrate HoneyCoin's financial infrastructure into your workflow with battle-tested APIs that are as fluid as honey."
            />

            <div className="flex justify-center">
              <CTA href="" color="#8066CC">
                View API Docs
              </CTA>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-[1050px] flex gap-2.5">
            {API_DOCS_DATA.map((doc, index) => (
              <ApiDocsCard key={index} {...doc} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiDocs;
