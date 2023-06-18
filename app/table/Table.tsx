import { Loans } from "../data";
import ContentRow from "./ContentRow";
import Disclaimer from "./Disclaimer";
import TableHead from "./TableHead";

const Table = () => {
  return (
    <div className="loan-table ml-8 flex flex-col rounded-xl border-2 border-primaryBlue-300 bg-white">
      <div className="grid grid-cols-3">
        <TableHead title="Account Type" />
        <TableHead title="Term" className="text-center" />
        <TableHead title="APR" className="text-center" />
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
