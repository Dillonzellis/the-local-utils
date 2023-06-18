import { Loans } from "../data";
import ContentRow from "./ContentRow";
import THead from "./THead";

const NewTable = () => {
  return (
    <table className="mt-24 border rounded-xl ml-12">
      <tr>
        <THead title="Account Type" />
        <THead title="Term" />
        <THead title="Annual Percentage Rate(APR)" />
      </tr>
      {Loans.map((loan, idx) => (
        <ContentRow
          key={idx}
          accountType={loan.accountType}
          term={loan.term}
          apr={loan.apr}
        />
      ))}
    </table>
  );
};

export default NewTable;
