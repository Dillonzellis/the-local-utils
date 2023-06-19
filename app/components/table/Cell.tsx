type CellProps = {
  content: string;
  className?: string;
};

const Cell = ({ content, className }: CellProps) => {
  return (
    <div
      className={`flex items-center border-r-2 border-t-2 border-primaryBlue-300 px-4 py-2 text-sm font-semibold text-black ${className}`}>
      {content}
    </div>
  );
};

export default Cell;
