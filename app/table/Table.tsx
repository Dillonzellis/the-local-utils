import { Loans } from "../data";
import ContentRow from "./ContentRow";
import Disclaimer from "./Disclaimer";
import TableHeadCell from "./TableHeadCell";

const Table = () => {
  return (
    <div className="loan-table ml-8 flex flex-col rounded-xl border-2 border-primaryBlue-300 bg-white">
      <div className="grid grid-cols-3">
        <TableHeadCell title="Account Type" />
        <TableHeadCell title="Term" className="text-center" />
        <TableHeadCell title="APR" className="text-center" />
      </div>
      {Loans.map((loan, idx) => (
        <ContentRow
          key={idx}
          accountType={loan.accountType}
          term={loan.term}
          apr={loan.apr}
        />
      ))}
      <Disclaimer />
    </div>
  );
};

export default Table;
