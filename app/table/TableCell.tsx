export type TableCellProps = {
  content: string;
};

const TableCell = ({ content }: TableCellProps) => {
  return <td className="pl-4">{content}</td>;
};

export default TableCell;
