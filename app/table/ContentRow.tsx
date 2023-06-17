import { LoanType } from "../data";

const ContentRow = ({ accountType, term, apr }: LoanType) => {
  return (
    <tr>
      <td>{accountType}</td>
      <td>{term}</td>
      <td>{apr}</td>
    </tr>
  );
};

export default ContentRow;
