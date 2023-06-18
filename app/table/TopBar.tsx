import React from "react";
import { tabs } from "../data";
import Tab from "./Tab";

type TopBarProps = {
  children?: React.ReactNode;
  activeTab?: string;
};

const TopBar = ({ activeTab }: TopBarProps) => {
  return (
    <div className="ml-12 flex">
      {tabs.map((tab) => (
        <Tab
          key={tab.title}
          title={tab.title}
          link={tab.link}
          active={tab.title === activeTab}
        />
      ))}
    </div>
  );
};

export default TopBar;
