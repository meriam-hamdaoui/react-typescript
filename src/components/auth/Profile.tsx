// component for user profile
import React from "react";

export type ProfileProps = {
  name: string;
};
export default function Profile({ name }: ProfileProps) {
  return <h3>Private Profile component. Name is {name} </h3>;
}
