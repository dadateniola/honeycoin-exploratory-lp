export type ExploreData = {
  color: string;
  title: string;
  artboard: string;
  description: string;
  layout: "compact" | "stretch";
};

export interface ExploreCardProps extends ExploreData {
  children?: React.ReactNode;
}
