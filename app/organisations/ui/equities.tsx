import { fetchEquities } from "@/lib/data/j-quants";

export default async function Equities({ query }: { query: string }) {
  const response = await fetchEquities();

  if ("error" in response) {
    return (
      <div>
        <h2>Error</h2>
        <p>{response.error}</p>
      </div>
    );
  }

  const filteredEquities = response.data.filter(({ CoName, CoNameEn, Code }) =>
    CoName.toLowerCase().includes(query.toLowerCase())
    || Code.toLowerCase().includes(query.toLowerCase())
    || CoNameEn.toLowerCase().includes(query.toLowerCase())
  );
  // const filteredEquities = response.data.filter((eq) =>
  //   eq.CoName.toLowerCase().includes(query.toLowerCase()) ||
  //   eq.Code.toLowerCase().includes(query.toLowerCase()) ||
  //   eq.CoNameEn.toLowerCase().includes(query.toLowerCase())
  // );

  return (
    <div>
      <h2>Equities</h2>
      <p>This is the equities component.</p>
    </div>
  );
}