// when we have multiple option to combine we need to use the template literale props

type HorizantalPosition = "left" | "center" | "right";
type VerticalPosition = "top" | "center" | "bottom";

type ToastPositionProps = {
  position:
    | Exclude<`${HorizantalPosition}-${VerticalPosition}`, "center-center">
    | "center";
};

/**
 * the exclude restrict the use of center-center since it's not a css value
 * Position prop can be one of
 * "left-center" | "left-top" | "left-bottom" | "center" | "center-top" |
 * "center-bottom" | "right-center" | "right-top" | "right-bottom"
 */

export const Toast = ({ position }: ToastPositionProps) => {
  return <h2>Toast Notification Position - {position}</h2>;
};
