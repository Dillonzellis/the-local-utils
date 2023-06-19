type DisclaimerProps = {
  disclaimer: JSX.Element | string;
  date: string;
};

const Disclaimer = ({ disclaimer, date }: DisclaimerProps) => {
  return (
    <div className="flex flex-col gap-4 border-t-2 border-primaryBlue-300 px-4 py-4 text-black">
      <div className="text-xs text-black">{disclaimer}</div>
      <div className="font-medium italic">{date}</div>
    </div>
  );
};

export default Disclaimer;
