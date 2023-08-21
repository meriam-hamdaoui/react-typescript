import React from "react";

type ContaineProps = {
  styles: React.CSSProperties;
};

export const Container = ({ styles }: ContaineProps) => {
  return <div style={styles}>Text Content goes here</div>;
};
