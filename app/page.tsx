import Table from "./table/Table";
import TopBar from "./table/TopBar";

export default function Home() {
  return (
    <main>
      <h1 className="mb-12">Loan Rates</h1>

      <div className="min-w-[700px] max-w-[800px] overflow-x-auto">
        <TopBar />
        <Table />
      </div>
    </main>
  );
}
