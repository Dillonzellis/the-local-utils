type THeadProps = {
  title: string;
};

const THead = ({ title }: THeadProps) => {
  return <th className="text-left pl-4">{title}</th>;
};

export default THead;
