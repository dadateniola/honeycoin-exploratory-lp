// Types
import type { ExploreCardProps } from "../explore/types";
import type { ApiDocsCardProps } from "../api-docs/types";
import type { FeaturesCardProps } from "../features/types";

export type RiveCardControllerProps =
  | { type: "explore"; data: ExploreCardProps }
  | { type: "features"; data: FeaturesCardProps }
  | { type: "api-docs"; data: ApiDocsCardProps };
