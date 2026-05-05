import { fetchEquities } from "@/lib/data/j-quants";

export default async function Equities({ query }: { query: string }) {
  // console.log("Fetching equities with query:", query);

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

  // console.log("Filtered equities:", filteredEquities);

  return (
    <div>
      <h2>Equities</h2>
      <p>This is the equities component.</p>
      <ul className="mt-4 space-y-2">
        {filteredEquities.map((eq) => (
          <li key={eq.Code} className="p-2 border rounded">
            <strong>{eq.CoName}</strong> ({eq.Code})
          </li>
        ))}
      </ul>
    </div>
  );
}