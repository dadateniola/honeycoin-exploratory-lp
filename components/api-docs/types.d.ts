export type ApiDocsData = {
  title: string;
  artboard: string;
  description: string;
};

export interface ApiDocsCardProps extends ApiDocsData {
  children?: React.ReactNode;
}
