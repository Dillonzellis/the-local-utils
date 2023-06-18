import React from "react";
import Tab from "./Tab";

const TopBar = () => {
  return (
    <div className="ml-12 flex">
      <Tab title="Savings Accounts" link="#" />
      <Tab title="Loans" link="#" active={true} />
      <Tab title="CD's" link="#" />
      <Tab title="IRA's" link="#" />
    </div>
  );
};

export default TopBar;
