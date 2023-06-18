import Table from "./table/Table";

export default function Home() {
  return (
    <main>
      <h1>Loan Rates</h1>

      <div className="max-w-[800px]">
        <Table />
      </div>
    </main>
  );
}
