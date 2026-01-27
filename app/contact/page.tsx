"use client";

import { useRef } from "react";

// Images
import {
  CalLogo,
  RvysionLogo,
  ContactArrow,
  LongArrowRightIcon,
} from "@/components/svg/svg";

// Imports
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import CTA from "@/components/cta/cta";
import { useForm } from "react-hook-form";
import Input from "@/components/form/input";
import DrawSVGPlugin from "gsap/DrawSVGPlugin";
import Textarea from "@/components/form/textarea";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  contactFormSchema,
  contactFormSchemaType,
} from "@/components/contact/data";

import { SECTION_HEADING_CLASS } from "@/components/global/data";
import { ContactFormSection } from "@/components/contact/components";
import PinnedUntilFooter from "@/components/footer/pinned-until-footer";

const Contact = () => {
  // Hooks
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { your_name: "", brand_product_name: "", message: "" },
  });

  // Refs
  const formRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // Animations
  useGSAP(() => {
    gsap.registerPlugin(DrawSVGPlugin);

    const form = formRef.current;
    const heading = headingRef.current;
    const overlay = overlayRef.current;
    const arrorPath = document.getElementById("contact-arrow-path");

    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    tl.set(heading, { autoAlpha: 0, scale: 0.8 })
      .set(form, { autoAlpha: 0 })
      .set(arrorPath, { drawSVG: 0 });

    tl.to(overlay, { scaleY: 0, ease: "expo.inOut", delay: 0.5, duration: 2 })
      .to(heading, { autoAlpha: 1, scale: 1 }, "-=0.5")
      .to(form, { autoAlpha: 1 })
      .to(arrorPath, { drawSVG: "100%", duration: 1 }, "<");

    tl.set(overlay, { display: "none", pointerEvents: "none" });
  }, []);

  // Functions
  const onSubmit = (data: contactFormSchemaType) => {
    console.log(data);
    alert("Form doesn't actually submit in this demo.");
  };

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed inset-0 w-screen h-screen bg-primary origin-bottom z-10" // Original state
      ></div>

      <PinnedUntilFooter>
        <section id="contact-us">
          <div className="relative w-full bg-background">
            {/* Background */}
            <div className="absolute inset-0 overflow-hidden">
              <div
                className="absolute top-1/2 left-0 -translate-y-1/2 w-[110%] xs:w-[80%] md:w-1/2 h-[110%] bg-primary"
                style={{ clipPath: "ellipse(100% 100% at 0% 100%)" }}
              ></div>
            </div>

            {/* Content */}
            <div className="relative pt-[200px] pb-[100px] px-6 md:px-10 flex flex-col items-center gap-[110px]">
              {/* Heading */}
              <div
                ref={headingRef}
                className="w-full max-w-[548px] flex flex-col items-center gap-4 text-center"
              >
                <h1 className={SECTION_HEADING_CLASS}>
                  Explore product when it launches
                </h1>

                <div className="w-full max-w-[400px]">
                  <p className="text-white/90 text-xl -tracking-[0.2px] leading-[150%]">
                    Fill in your details and we&apos;ll contact you to discuss
                    your goals and walk you through a personalized demo.
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <div className="max-lg:hidden absolute bottom-[85%] left-0 -translate-x-[65%]">
                  <ContactArrow />
                </div>

                {/* Form */}
                <div
                  ref={formRef}
                  className="w-full max-w-[600px] p-6 sm:py-7 sm:px-8 custom-flex-col gap-7 bg-about-card-bg rounded-3xl"
                >
                  <div
                    className={
                      "flex flex-wrap justify-center gap-2.5 text-text-primary text-xl font-fraunces font-semibold leading-[120%]"
                    }
                  >
                    <p>Get in touch with the</p>
                    <RvysionLogo />
                    <p>team</p>
                  </div>

                  <div className="py-4 custom-flex-col gap-8">
                    <ContactFormSection
                      title="Enter your details"
                      className="gap-8"
                    >
                      <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="custom-flex-col gap-5"
                      >
                        <div className="flex flex-col xs:flex-row gap-5">
                          <Input
                            label="Your name"
                            placeholder="Collins Donye"
                            {...register("your_name")}
                            error={errors.your_name?.message}
                          />
                          <Input
                            label="Brand or product name"
                            placeholder="Rvysion"
                            {...register("brand_product_name")}
                            error={errors.brand_product_name?.message}
                          />
                        </div>

                        <Textarea
                          label="Message"
                          placeholder="Enter your message here"
                          rows={1}
                          className="custom-scrollbar"
                          {...register("message")}
                          error={errors.message?.message}
                        />

                        <div className="flex justify-start">
                          <CTA action={{ type: "submit" }}>SUBMIT</CTA>
                        </div>
                      </form>
                    </ContactFormSection>

                    <ContactFormSection title="You can also" className="gap-5">
                      <a
                        href="https://calendly.com/rvysionstudio/discovery"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-4 px-5 flex gap-4 bg-text-primary/4 hover:bg-text-primary/8 rounded-xl transition-colors duration-300"
                      >
                        <CalLogo />
                        <div className="flex-1 custom-flex-col gap-2 text-text-primary leading-[135%]">
                          <div className="flex items-center justify-between gap-4">
                            <p className="font-medium -tracking-[0.15px]">
                              Book a 1 on 1 call with us
                            </p>
                            <LongArrowRightIcon />
                          </div>

                          <p className="text-sm -tracking-[0.14px]">
                            Schedule a 30-minute call to share your project
                            goals and learn how we can craft a tailored
                            exploration for your product or brand.
                          </p>
                        </div>
                      </a>
                    </ContactFormSection>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </PinnedUntilFooter>
    </>
  );
};

export default Contact;
