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
      <TableContainer>
        <TopBar activeTab="CD's" />
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
          <Disclaimer
            disclaimer="Rates stated above are for certificates with a minimum deposit of $500 which dividends are compounded and paid quarterly. A withdrawal of dividends before maturity will be subject to penalty and will reduce the APR. Please view the Truth-In-Savings Disclosure for complete details on specific Share Certificates, including account limitations, dividend compounding, dividend crediting and method used to compute dividends."
            date="*APY is accurate as of June 30, 2023."
          />
        </RateTable>
      </TableContainer>
    </div>
  );
};

export default page;
