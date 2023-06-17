import TableCell from "./TableCell";

type TableColProps = {
  title: string;
};

const TableCol = ({ title }: TableColProps) => {
  return (
    <div className="w-[200px]">
      <div className="py-8 pl-4 font-bold text-lg">{title}</div>
      <div className="border-r border-l-2 border-slate-300 border-b-2">
        {/* Table Row */}
        <TableCell />
        <TableCell />
        <TableCell />
        <TableCell />
      </div>
    </div>
  );
};

export default TableCol;
