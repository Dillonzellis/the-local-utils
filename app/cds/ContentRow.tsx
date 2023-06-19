import Cell from "../table/Cell";
import { CdType } from "./cdData";

const ContentRow = ({ accountType, apy }: CdType) => {
  return (
    <div className="grid grid-cols-2">
      <Cell content={accountType} />
      <Cell content={apy} className="justify-center" />
    </div>
  );
};

export default ContentRow;
