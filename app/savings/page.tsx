import Disclaimer from "../components/table/Disclaimer";
import RateTable from "../components/table/RateTable";
import TableContainer from "../components/table/TableContainer";
import TableHead from "../components/table/TableHead";
import TableHeadCell from "../components/table/TableHeadCell";
import TopBar from "../components/table/TopBar";
import ContentRow from "./ContentRow";
import { savingsData } from "./savingsData";

const page = () => {
  const disclaimerLink = (
    <a href="https://www.google.com">Truth-In Savings Disclosure</a>
  );

  return (
    <div>
      <TableContainer>
        <TopBar activeTab="Savings Account" />
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
          <Disclaimer
            disclaimer={
              <>
                Please view the{" "}
                <a
                  className="font-bold text-primaryBlue-400"
                  href="https://www.google.com">
                  Truth-In Savings Disclosure
                </a>{" "}
                for complete details on each account type including account
                limitations, dividend compounding, dividend crediting and the
                method used to compute dividends. Fees or other conditions could
                reduce the earnings in the account. Dividends are declared by
                the Board of Directors and are subject to change.
              </>
            }
            date="*APY is accurate as of June 30, 2023."
          />
        </RateTable>
      </TableContainer>
    </div>
  );
};

export default page;
