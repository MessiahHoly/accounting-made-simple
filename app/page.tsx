// import Image from "next/image";

import { fetchJQuantsData } from "@/lib/data/j-quants";
import { getAccountingEquation } from "@/lib/utils/utils";

// import { fetchJapaneseAccountingData } from "@/lib/data/alpha-vantage";

export default async function Home() {
  // await fetchJapaneseAccountingData("6758.T&apikey=your_api_key"); // Example: Fetch data for Toyota Motor Corporation (7203.T)
  // await fetchJapaneseAccountingData("7203.T"); // Example: Fetch data for Toyota Motor Corporation (7203.T)
  const data = await fetchJQuantsData("7203"); // Example: Fetch data for Toyota Motor Corporation (7203)
  const accountingData = getAccountingEquation(data.data);
  console.log(accountingData);

  return (
    <main>
      <p>Assets = Liabilities + Owner's Equity</p>
    </main>
  );
}
