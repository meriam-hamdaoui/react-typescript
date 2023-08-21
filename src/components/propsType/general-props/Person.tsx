// props type of an object

import { PersonProps } from "../../types/Props.types";

export const Person = ({ name }: PersonProps) => {
  return (
    <div>
      {name.first} {name.last}
    </div>
  );
};
