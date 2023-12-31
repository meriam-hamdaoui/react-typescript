// component controles whether user can view the profile based on logged in or not
import React from "react";
import Login from "./Login";
import { ProfileProps } from "./Profile";
type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>;
};

export default function Private({
  isLoggedIn,
  component: Component,
}: PrivateProps) {
  return isLoggedIn ? <Component name="mariem" /> : <Login />;
}
