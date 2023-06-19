type TableHeadCellProps = {
  title: string;
  className?: string;
};

const TableHeadCell = ({ title, className }: TableHeadCellProps) => {
  return (
    <div
      className={`px-4 py-12 text-xl font-extrabold text-primaryBlue-400 ${className}`}>
      {title}
    </div>
  );
};

export default TableHeadCell;
