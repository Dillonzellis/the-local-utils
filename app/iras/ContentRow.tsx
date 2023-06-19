import Cell from "../components/table/Cell";
import { IraType } from "./iraData";

const ContentRow = ({ accountType, apy }: IraType) => {
  return (
    <div className="grid grid-cols-2">
      <Cell content={accountType} />
      <Cell content={apy} className="justify-center" />
    </div>
  );
};

export default ContentRow;
