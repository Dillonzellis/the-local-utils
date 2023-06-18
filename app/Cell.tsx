type CellProps = {
  content: string;
};

const Cell = ({ content }: CellProps) => {
  return (
    <div className="px-4 py-2 border-t-2 border-primaryBlue-300 border-r-2 flex items-center text-black break-all">
      {content}
    </div>
  );
};

export default Cell;
