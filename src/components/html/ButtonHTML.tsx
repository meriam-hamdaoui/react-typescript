import React from "react";

// type CustomButtonProps = {
//   variant: "primary" | "secondary";
// } & React.ComponentProps<"button">;

// if we want to restric the  children type to be a reactnode type we need to use
// Omit key word
/**
 * */
type CustomButtonProps = {
  variant: "primary" | "secondary";
  children: string;
} & Omit<React.ComponentProps<"button">, "children">;

export const CustomButton = ({
  variant,
  children,
  ...rest
}: CustomButtonProps) => {
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  );
};
