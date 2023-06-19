import Disclaimer from "../table/Disclaimer";
import RateTable from "../table/RateTable";
import TableContainer from "../table/TableContainer";
import TableHead from "../table/TableHead";
import TableHeadCell from "../table/TableHeadCell";
import TopBar from "../table/TopBar";
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
