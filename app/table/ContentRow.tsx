import { LoanType } from "../data";
import Cell from "./Cell";

const ContentRow = ({ accountType, term, apr }: LoanType) => {
  return (
    <div className="grid grid-cols-3">
      <Cell content={accountType} />
      <Cell content={term} className="justify-center" />
      <Cell content={apr} className="justify-center" />
    </div>
  );
};

export default ContentRow;
