import Disclaimer from "../components/table/Disclaimer";
import RateTable from "../components/table/RateTable";
import ContentRow from "./ContentRow";

import TableContainer from "../components/table/TableContainer";
import TableHead from "../components/table/TableHead";
import TableHeadCell from "../components/table/TableHeadCell";
import TopBar from "../components/table/TopBar";
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
