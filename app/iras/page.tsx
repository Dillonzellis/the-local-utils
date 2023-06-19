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
      <TopBar activeTab="IRA's" />
      <TableContainer>
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
          <Disclaimer />
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
            <Disclaimer />
          </RateTable>
        </TableContainer>
      </div>
    </div>
  );
};

export default page;
