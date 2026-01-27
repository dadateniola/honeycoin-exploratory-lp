// Types
import type { FormComponentsWrapperProps } from "./types";

// Components
export const FormComponentsWrapper: React.FC<FormComponentsWrapperProps> = ({
  children,
}) => (
  <div
    className="flex-1 custom-flex-col gap-2"
  >
    {children}
  </div>
);
