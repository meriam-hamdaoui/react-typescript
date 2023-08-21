import { ReactNode } from "react";

export type GreetProps = {
  name: string;
  messages?: number; // an optional parameter
  isLoggedIn: boolean;
};

type Name = {
  first: string;
  last: string;
};
export type PersonProps = {
  name: Name;
};

// export type PersonListProps = {
//   names: {
//     id: number;
//     first: string;
//     last: string;
//   }[];
// };

export type PersonListProps = {
  names: Array<Name>;
};

export type StatusProps = {
  // status: string;
  status: "loading" | "success" | "error"; // strict type
};

export type HeadingProps = {
  children: string;
};
export type OscarProps = {
  children: ReactNode;
};
