import Disclaimer from "../components/table/Disclaimer";
import RateTable from "../components/table/RateTable";
import TableContainer from "../components/table/TableContainer";
import TableHead from "../components/table/TableHead";
import TableHeadCell from "../components/table/TableHeadCell";
import TopBar from "../components/table/TopBar";
import ContentRow from "./ContentRow";
import { Cds } from "./cdData";

const page = () => {
  return (
    <div>
      <TopBar activeTab="CD's" />
      <TableContainer>
        <RateTable>
          <TableHead cols="2">
            <TableHeadCell title="Account Type" />
            <TableHeadCell
              title="Annual Percent Yield(APY)"
              className="text-center"
            />
          </TableHead>
          {Cds.map((cd, idx) => (
            <ContentRow key={idx} accountType={cd.accountType} apy={cd.apy} />
          ))}
          <Disclaimer />
        </RateTable>
      </TableContainer>
    </div>
  );
};

export default page;
