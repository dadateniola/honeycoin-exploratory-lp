export interface CTAProps {
  action:
    | { href: string }
    | {
        type: "button" | "submit";
        onClick?: () => void;
      };
  color?: "#8066CC" | "#134E64" | (string & {});
  children: React.ReactNode;
}

export interface AltCTAProps {
  href: string;
  children: React.ReactNode;
}
