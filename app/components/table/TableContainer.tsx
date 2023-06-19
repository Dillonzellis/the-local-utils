type TableContainerProps = {
  children: React.ReactNode;
};

const TableContainer = ({ children }: TableContainerProps) => {
  return (
    <div className="min-w-[700px] max-w-[800px] overflow-x-auto">
      {children}
    </div>
  );
};

export default TableContainer;
