import ContentRow from "../table/ContentRow";
import Disclaimer from "../table/Disclaimer";
import RateTable from "../table/RateTable";

import TableContainer from "../table/TableContainer";
import TableHead from "../table/TableHead";
import TableHeadCell from "../table/TableHeadCell";
import TopBar from "../table/TopBar";
import { Loans } from "./loanData";

const LoanTable = () => {
  return (
    <div>
      <TopBar activeTab="Loan" />
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
