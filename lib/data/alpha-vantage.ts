export const fetchJapaneseAccountingData = async (symbol: string) => {
  const API_KEY = process.env.ALPHA_VANTAGE_API_KEY;
  const url = `https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=${symbol}&apikey=${API_KEY}`;

  const res = await fetch(url, { next: { revalidate: 3600 } });

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
};

export const searchSymbols = async (keywords: string) => {
  const API_KEY = process.env.ALPHA_VANTAGE_API_KEY;
  const url = `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${keywords}&apikey=${API_KEY}`;

  const res = await fetch(url, { next: { revalidate: 3600 } });

  if (!res.ok) {
    return { error: `Failed to fetch data. Status: ${res.status} ${res.statusText}` };
  };

  const data = await res.json();

  return { data };
};