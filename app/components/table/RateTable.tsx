type RateTableProps = {
  children: React.ReactNode;
};

const RateTable = ({ children }: RateTableProps) => {
  return (
    <div className="loan-table ml-8 flex flex-col rounded-xl border-2 border-primaryBlue-300 bg-white">
      {children}
    </div>
  );
};

export default RateTable;
