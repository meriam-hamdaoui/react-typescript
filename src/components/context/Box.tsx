import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Box() {
  const theme = useContext(ThemeContext);

  return (
    <h2 style={{ background: theme.primary.main, color: theme.primary.text }}>
      Theme Context
    </h2>
  );
}
