import Table from "./Table";
import NewTable from "./table/NewTable";

export default function Home() {
  return (
    <main>
      <h1>Loan Rates</h1>

      <div className="max-w-[800px]">
        <Table />
      </div>

      {/* <NewTable /> */}
    </main>
  );
}
