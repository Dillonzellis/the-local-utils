import Disclaimer from "../components/table/Disclaimer";
import RateTable from "../components/table/RateTable";
import TableContainer from "../components/table/TableContainer";
import TableHead from "../components/table/TableHead";
import TableHeadCell from "../components/table/TableHeadCell";
import TopBar from "../components/table/TopBar";
import ContentRow from "./ContentRow";
import { savingsData } from "./savingsData";

const page = () => {
  return (
    <div>
      <TopBar activeTab="CD's" />
      <TableContainer>
        <RateTable>
          <TableHead cols="3">
            <TableHeadCell title="Account Type" />
            <TableHeadCell title="Minimum to Earn Dividend" />
            <TableHeadCell
              title="Annual Percent Yield(APY)"
              className="text-center"
            />
          </TableHead>
          {savingsData.map((rate, idx) => (
            <ContentRow
              key={idx}
              accountType={rate.accountType}
              mintoEarn={rate.mintoEarn}
              apy={rate.apy}
            />
          ))}
          <Disclaimer />
        </RateTable>
      </TableContainer>
    </div>
  );
};

export default page;
