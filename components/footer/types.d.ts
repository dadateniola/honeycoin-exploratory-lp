export type FooterData = {
  title: string;
  links: { label: string; href: string }[];
};

export type FooterCardProps = FooterData;

export interface PinnedUntilFooterProps {
  children: React.ReactNode;
}
