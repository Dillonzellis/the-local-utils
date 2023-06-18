type TableHeadProps = {
  title: string;
};

const TableHead = ({ title }: TableHeadProps) => {
  return (
    <div className="px-4 py-12 text-xl font-extrabold text-primaryBlue-400">
      {title}
    </div>
  );
};

export default TableHead;
