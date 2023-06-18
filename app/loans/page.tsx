import React from "react";
import { Loans } from "../data";
import ContentRow from "../table/ContentRow";
import Disclaimer from "../table/Disclaimer";
import RateTable from "../table/RateTable";
import Tab from "../table/Tab";
import TableContainer from "../table/TableContainer";
import TableHead from "../table/TableHead";
import TableHeadCell from "../table/TableHeadCell";
import TopBar from "../table/TopBar";

const LoanTable = () => {
  return (
    <div>
      <TopBar>
        <Tab title="Savings Account" link="#" />
        <Tab title="Loan" link="#" active={true} />
        <Tab title="CD's" link="#" />
        <Tab title="IRA's" link="#" />
      </TopBar>
      <TableContainer>
        <RateTable>
          <TableHead cols="3">
            <TableHeadCell title="Account Type" />
            <TableHeadCell title="Term" className="text-center" />
            <TableHeadCell title="APR" className="text-center" />
          </TableHead>
          {Loans.map((loan, idx) => (
            <ContentRow
              key={idx}
              accountType={loan.accountType}
              term={loan.term}
              apr={loan.apr}
            />
          ))}
          <Disclaimer />
        </RateTable>
      </TableContainer>
    </div>
  );
};

export default LoanTable;
