type TableHeadProps = {
  title: string;
  className?: string;
};

const TableHead = ({ title, className }: TableHeadProps) => {
  return (
    <div
      className={`px-4 py-12 text-xl font-extrabold text-primaryBlue-400 ${className}`}>
      {title}
    </div>
  );
};

export default TableHead;
