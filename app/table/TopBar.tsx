import React from "react";
import Tab from "./Tab";

type TopBarProps = {
  children?: React.ReactNode;
};

const TopBar = ({ children }: TopBarProps) => {
  return <div className="ml-12 flex">{children}</div>;
};

export default TopBar;
