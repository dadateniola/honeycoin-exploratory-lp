export type FooterData = {
  title: string;
  links: { label: string; href: string }[];
};

export type FooterCardProps = FooterData;

export type WarpBGItem = {
  id: string;
  side: number;
  className: string;
  style: React.CSSProperties;
};

export interface PinnedUntilFooterProps {
  children: React.ReactNode;
}

export interface WarpBGProps {
  startAnimation?: boolean;
}
