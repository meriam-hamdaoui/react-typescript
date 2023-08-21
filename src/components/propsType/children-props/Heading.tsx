// childen props : simple text
import { HeadingProps } from "../../types/Props.types";
export const Heading = ({ children }: HeadingProps) => {
  return <h2>{children}</h2>;
};
