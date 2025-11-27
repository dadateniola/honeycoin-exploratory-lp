import Link from "next/link";

// Types
import type { NavbarProps } from "./types";

// Images
import { RvysionLogo } from "../svg/svg";

// Imports
import clsx from "clsx";
import CTA from "../cta/cta";

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <nav
      className={clsx(
        "absolute top-0 left-0 right-0 w-full h-navbar-height px-10 flex items-center justify-between",
        className
      )}
    >
      {/* Logo */}
      <Link href="/">
        <RvysionLogo size={40} />
      </Link>

      <CTA href="" color="#134E64">
        PROJECT DETAILS
      </CTA>
    </nav>
  );
};

export default Navbar;
