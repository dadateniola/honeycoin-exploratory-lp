// Types
import type { ApiDocsCardProps } from "./types";

// Components
export const ApiDocsCard: React.FC<ApiDocsCardProps> = ({
  title,
  description,
}) => (
  <div className="relative flex-1 min-w-0 h-[600px] bg-api-docs-card-bg rounded-xl overflow-hidden">
    <div className="absolute inset-0"></div>

    <div className="relative size-full py-6 px-5 custom-flex-col justify-end gap-3">
      <h2 className="text-white/90 text-2xl -tracking-[0.24px] leading-[100%]">
        {title}
      </h2>

      <p className="-tracking-[0.16px] leading-[135%]">{description}</p>
    </div>
  </div>
);
