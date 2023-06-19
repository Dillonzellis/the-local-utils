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
          <Disclaimer
            disclaimer="The above rates include 3 tiers based on the applicants credit worthiness and amount of down payment, if any. The maximum annual percentage rate will never be greater than 18.00%. The Annual Percentage Rate, corresponding daily periodic rates, late payment charges, amount and due date of payments, and other charges that may be imposed will be determined at the time of each advance and disclosed on the Advance Request Voucher.  *72 month contract available for loans over $25,000 - 84 month contract available for loans over $30,000"
            date="*APR is accurate as of January 9, 2023."
          />
        </RateTable>
      </TableContainer>
    </div>
  );
};

export default LoanTable;
