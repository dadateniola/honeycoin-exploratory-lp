"use client";

import Link from "next/link";
import { useRef } from "react";

// Types
import type { NavbarProps } from "./types";

// Images
import { AetherLogo } from "../svg/svg";

// Imports
import clsx from "clsx";
import gsap from "gsap";
import CTA from "../cta/cta";
import { useGSAP } from "@gsap/react";
import { fraunces } from "../global/data";

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  // Refs
  const navRef = useRef<HTMLElement>(null);

  // Animations
  useGSAP(() => {
    const nav = navRef.current;
    if (!nav) return;

    const tl = gsap.timeline();

    tl.set(nav, { autoAlpha: 0, yPercent: 50, scale: 0.9 }).to(nav, {
      autoAlpha: 1,
      yPercent: 0,
      scale: 1,
      delay: 0.5,
    });
  }, []);

  return (
    <nav
      ref={navRef}
      className={clsx(
        "absolute top-0 left-0 right-0 w-full h-navbar-height px-6 md:px-10 flex items-center justify-between",
        "opacity-0 invisible", // Initial state
        className,
      )}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-2.5">
        <AetherLogo size={40} />
        <p
          className={clsx(
            "text-2xl font-semibold -tracking-[0.24px] leading-[100%]",
            fraunces.className,
          )}
        >
          AETHER
        </p>
      </Link>

      <CTA action={{ href: "" }}>JOIN WAITLIST</CTA>
    </nav>
  );
};

export default Navbar;
