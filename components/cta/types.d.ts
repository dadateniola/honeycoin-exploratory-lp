export interface CTAProps {
  action:
    | { href: string }
    | {
        type: "button" | "submit";
        onClick?: () => void;
      };
  color?: "#8066CC" | "#134E64" | (string & {});
  variant?: "default" | "secondary";
  children: React.ReactNode;
}
