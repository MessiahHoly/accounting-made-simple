'use server';

import { FinnhubServerResponseSchema, SearchResponseSchema } from "../types/finnhub";

export const searchSymbols = async (query: string) => {
  const API_KEY = process.env.FINNHUB_API_KEY;
  const headers = {
    'X-Finnhub-Token': API_KEY || '',
  };
  const url = `https://finnhub.io/api/v1/search?q=${query}`;

  const res = await fetch(url, { headers, next: { revalidate: 3600 } });

  if (!res.ok) {
    return { error: `Failed to fetch data from Finnhub. Status: ${res.status} ${res.statusText}` };
  }

  const rawData = await res.json();
  const result = SearchResponseSchema.safeParse(rawData);

  if (!result.success) {
    return { error: `Failed to parse data from Finnhub. Error: ${result.error.message}` };
  }

  return { data: result.data.result };
};

export const fetchFinancialsAsReported = async (symbol: string) => {
  const API_KEY = process.env.FINNHUB_API_KEY;
  const headers = {
    'X-Finnhub-Token': API_KEY || '',
  };
  const url = `https://finnhub.io/api/v1/stock/financials-reported?symbol=${symbol}`;

  const res = await fetch(url, { headers, next: { revalidate: 3600 } });

  if (!res.ok) {
    return { error: `Failed to fetch financials from Finnhub. Status: ${res.status} ${res.statusText}` };
  }

  const rawData = await res.json();
  // You can add schema validation here similar to the searchSymbols function
  // console.log("Raw financials data:", JSON.stringify(rawData));
  // console.log("Raw financials data:", rawData);
  // console.log(rawData.data[0].report);
  // console.log(rawData)

  const result = FinnhubServerResponseSchema.safeParse(rawData);
  console.log("Parsed financials data:", result);

  if (!result.success) {
    return { error: `Failed to parse financials data from Finnhub. Error: ${result.error.message}` };
  }

  return { data: result.data };
}