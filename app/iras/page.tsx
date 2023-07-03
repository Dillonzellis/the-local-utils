import React from "react";
import Disclaimer from "../components/table/Disclaimer";
import RateTable from "../components/table/RateTable";
import TableContainer from "../components/table/TableContainer";
import TableHead from "../components/table/TableHead";
import TableHeadCell from "../components/table/TableHeadCell";
import TopBar from "../components/table/TopBar";
import ContentRow from "./ContentRow";
import { iraData, iraDataTime } from "./iraData";

const page = () => {
  return (
    <div>
      <TableContainer>
        <TopBar activeTab="IRA's" />
        <RateTable>
          <TableHead cols="2">
            <TableHeadCell title="Account Type" />
            <TableHeadCell
              title="Annual Percent Yield(APY)"
              className="text-center"
            />
          </TableHead>
          {iraData.map((ira, idx) => (
            <ContentRow key={idx} accountType={ira.accountType} apy={ira.apy} />
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
      <div className="pt-4">
        <TableContainer>
          <RateTable>
            <TableHead cols="2">
              <TableHeadCell title="Account Type" />
              <TableHeadCell
                title="Annual Percent Yield(APY)"
                className="text-center"
              />
            </TableHead>
            {iraDataTime.map((ira, idx) => (
              <ContentRow
                key={idx}
                accountType={ira.accountType}
                apy={ira.apy}
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
                  method used to compute dividends. Fees or other conditions
                  could reduce the earnings in the account. Dividends are
                  declared by the Board of Directors and are subject to change.
                </>
              }
              date="*APY is accurate as of June 30, 2023."
            />
          </RateTable>
        </TableContainer>
      </div>
    </div>
  );
};

export default page;
