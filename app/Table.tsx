import React from "react";
import TableCol from "./TableCol";

const Table = () => {
  return (
    <div className="flex border rounded-xl max-w-fit">
      <TableCol title="Account Type" />
      <TableCol title="Term" />
      <TableCol title="APR" />
    </div>
  );
};

export default Table;
