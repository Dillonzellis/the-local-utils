import { LoanType } from "../data";

const ContentRow = ({ accountType, term, apr }: LoanType) => {
  return (
    <tr>
      <td className="pl-4 py-1">{accountType}</td>
      <td className="pl-4 py-1">{term}</td>
      <td className="pl-4 py-1">{apr}</td>
    </tr>
  );
};

export default ContentRow;
