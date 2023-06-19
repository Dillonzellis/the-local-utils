type TableContainerProps = {
  children: React.ReactNode;
};

const TableContainer = ({ children }: TableContainerProps) => {
  return (
    <div className="min-w-[700px] max-w-[725px] overflow-x-auto pb-5">
      {children}
    </div>
  );
};

export default TableContainer;
