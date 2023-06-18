import ContentRow from "./ContentRow";
import Head from "./Head";
import { Loans } from "./data";

const Table = () => {
  return (
    <div className="loan-table ml-8 mt-8 flex flex-col border-2 border-primaryBlue-300 rounded-xl bg-white">
      <div className="grid grid-cols-3">
        <Head title="Account Type" />
        <Head title="Term" />
        <Head title="APR" />
      </div>
      {Loans.map((loan, idx) => (
        <ContentRow
          key={idx}
          accountType={loan.accountType}
          term={loan.term}
          apr={loan.apr}
        />
      ))}
    </div>
  );
};

export default Table;
