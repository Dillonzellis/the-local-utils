type HeadProps = {
  title: string;
};

const Head = ({ title }: HeadProps) => {
  return (
    <div className="py-12 px-4 font-extrabold text-xl text-primaryBlue-400">
      {title}
    </div>
  );
};

export default Head;
