export type FeaturesData = {
  icon: React.ReactNode;
  color: string;
  title: string;
  artboard: string;
  textColor?: string;
  description: string;
};

export interface FeaturesCardProps extends FeaturesData {
  children?: React.ReactNode;
}
