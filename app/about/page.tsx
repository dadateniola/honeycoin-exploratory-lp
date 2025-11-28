// Imports
import CTA from "@/components/cta/cta";
import Footer from "@/components/footer/footer";
import { SectionHeading } from "@/components/global/components";

const About = () => {
  return (
    <>
      <section id="about-us">
        <div className="relative w-full h-screen bg-background custom-flex-center">
          <div className="flex flex-col items-center gap-5">
            <SectionHeading title="Under Construction" />
            <CTA href="/" color="#8066CC">
              Back to Home
            </CTA>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
