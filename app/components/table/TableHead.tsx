type TableHeadProps = {
  children: React.ReactNode;
  cols: string;
};

const TableHead = ({ children, cols }: TableHeadProps) => {
  return <div className={`grid grid-cols-${cols}`}>{children}</div>;
};

export default TableHead;
