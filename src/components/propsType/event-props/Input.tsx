// handleChange event props
import React from "react";

//  an input html element needs 2 props
type InputProps = {
  value?: string; // the current state of this component (value)
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // a function that is called when something changes in our app. It receives one argument, which is an object with
};

export const Input = ({ value, handleChange }: InputProps) => {
  // define the handle change function inside the component or pass it as props, the same aspect remain
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    console.log(event?.target?.value);

  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        value={value}
        onChange={(e) => handleChange(e)}
      />
      <input
        type="text"
        name=""
        id=""
        value={value}
        onChange={(e) => handleInputChange(e)}
      />
    </div>
  );
};
