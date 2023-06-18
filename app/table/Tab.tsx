type TabProps = {
  title: string;
  active?: boolean;
  link: string;
};

const handleActive = (active: TabProps["active"]) => {
  if (active) {
    return "bg-primaryBlue-300 text-primaryBlue-400";
  } else {
    return "bg-primaryBlue-400 text-white hover:bg-primaryBlue-300 hover:text-primaryBlue-400";
  }
};

const Tab = ({ title, active, link }: TabProps) => {
  return (
    <a
      className={`w-[150px] rounded-t-lg border-r p-2 text-center text-sm font-bold ${handleActive(
        active
      )}`}
      href={link}>
      {title}
    </a>
  );
};

export default Tab;
