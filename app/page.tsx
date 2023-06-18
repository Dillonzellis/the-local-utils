import Table from "./table/Table";
import TopBar from "./table/TopBar";

export default function Home() {
  return (
    <main>
      <h1 className="mb-12">Loan Rates</h1>

      <div className="max-w-[800px]">
        <TopBar />
        <Table />
      </div>
    </main>
  );
}
