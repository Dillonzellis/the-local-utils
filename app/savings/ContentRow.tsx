import Cell from "../components/table/Cell";
import { SavingsDataType } from "./savingsData";

const ContentRow = ({ accountType, mintoEarn, apy }: SavingsDataType) => {
  return (
    <div className="grid grid-cols-3">
      <Cell content={accountType} />
      <Cell content={mintoEarn} />
      <Cell content={apy} className="justify-center" />
    </div>
  );
};

export default ContentRow;
