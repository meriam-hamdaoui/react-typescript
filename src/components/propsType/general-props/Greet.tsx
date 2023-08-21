// learning props type in general
import { GreetProps } from "../../types/Props.types";

export const Greet = ({ name, messages = 0, isLoggedIn }: GreetProps) => {
  return (
    <div>
      <h2>
        {isLoggedIn
          ? `Welcome ${name}! You have ${messages}  unread messages`
          : "welcome guest"}
      </h2>
    </div>
  );
};
