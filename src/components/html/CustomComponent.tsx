import React from "react";
import { Greet } from "../propsType/general-props/Greet";

export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <div>
      {props.isLoggedIn}
      {props?.name}
      {props.messages}
    </div>
  );
};
