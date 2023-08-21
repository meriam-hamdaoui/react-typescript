// advanced props : specify the values of the variable
import { StatusProps } from "../../types/Props.types";

export const Status = ({ status }: StatusProps) => {
  let message =
    status === "loading"
      ? "Loading..."
      : status === "success"
      ? "Data fetched successfully!"
      : "Error fetching data";

  return <h2>Status - {message}</h2>;
};
