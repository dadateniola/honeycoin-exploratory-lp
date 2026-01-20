export type ExploreData = {
  color: string;
  title: string;
  layout: "compact" | "stretch";
  artboard: string;
  description: string;
};

export type ExploreCardProps = ExploreData & {
  children?: React.ReactNode;
};
