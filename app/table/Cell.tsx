type CellProps = {
  content: string;
};

const Cell = ({ content }: CellProps) => {
  return (
    <div className="flex items-center break-all border-r-2 border-t-2 border-primaryBlue-300 px-4 py-2 text-black">
      {content}
    </div>
  );
};

export default Cell;
