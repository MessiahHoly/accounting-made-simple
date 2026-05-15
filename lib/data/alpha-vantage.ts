export const fetchJapaneseAccountingData = async (symbol: string) => {
  const API_KEY = process.env.ALPHA_VANTAGE_API_KEY;
  // const url = `https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=${symbol}&apikey=${APIKEY}`;
  const url = `https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=${symbol}&apikey=${API_KEY}`;
  // const url = `https://alphavantage.co/query/?symbol=${symbol}&apikey=${API_KEY}`;

  const res = await fetch(url, { next: { revalidate: 3600 } });

  if (!res.ok) throw new Error("Failed to fetch data");

  // console.log("Fetched data from Alpha Vantage:", await res.clone().json());

  return res.json();

  // try {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   console.log('Fetched data from Alpha Vantage:', data);
  //   return data;
  // } catch (error) {
  //   console.error('Error fetching data from Alpha Vantage:', error);
  //   throw error;
  // }
};