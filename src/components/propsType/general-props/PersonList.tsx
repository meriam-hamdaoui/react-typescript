// props type of an array of objects

import { PersonListProps } from "../../types/Props.types";

export const PersonList = ({ names }: PersonListProps) => {
  return (
    <div>
      {names.map((el, index) => (
        <h2 key={index}>
          {el.first} {el.last}
        </h2>
      ))}
      {/* <h2>Fatma Hamda</h2>
      <h2>Emna Ep Selmi</h2>
      <h2>Aysir Njaimi</h2> */}
    </div>
  );
};
