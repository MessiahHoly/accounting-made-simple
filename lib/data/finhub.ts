'use server';

import { SearchResponseSchema } from "../types/finhub";

// import { SearchResponseSchema } from "../types/edinet-db";

export const searchSymbols = async (query: string) => {
  const API_KEY = process.env.FINHUB_API_KEY;
  const headers = {
    'X-Finnhub-Token': API_KEY || '',
  };
  const url = `https://finnhub.io/api/v1/search?q=${query}`;

  const res = await fetch(url, { headers, next: { revalidate: 3600 } });
  // console.log(res)

  if (!res.ok) {
    return { error: `Failed to fetch data from Finhub. Status: ${res.status} ${res.statusText}` };
  }

  const rawData = await res.json();
  // console.log(rawData);
  const result = SearchResponseSchema.safeParse(rawData);

  if (!result.success) {
    return { error: `Failed to parse data from Finhub. Error: ${result.error.message}` };
  }

  // console.log(result);

  // console.log(rawData);
  return { data: result.data.result };
};