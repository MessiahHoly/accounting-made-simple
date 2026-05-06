// import Image from "next/image";

// import { fetchJQuantsData } from "@/lib/data/j-quants";
import { getAccountingEquation } from "@/lib/utils/utils";

export default async function Home() {
  // const data = await fetchJQuantsData("7203"); // Example: Fetch data for Toyota Motor Corporation (7203)
  // console.log("Raw data from J-Quants API:", data);
  // const accountingData = getAccountingEquation(data.data);
  // console.log(accountingData);

  return (
    <main>
      <p>Assets = Liabilities + Owner's Equity</p>
    </main>
  );
}
