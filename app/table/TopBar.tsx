import React from "react";
import Tab from "./Tab";

const TopBar = () => {
  return (
    <div className="flex">
      <Tab title="Savings Accounts" />
      <Tab title="Loans" />
      <Tab title="CD's" />
      <Tab title="IRA's" />
    </div>
  );
};

export default TopBar;
