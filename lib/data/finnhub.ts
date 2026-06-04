'use server';

import { SearchResponseSchema } from "../types/finhub";

export const searchSymbols = async (query: string) => {
  const API_KEY = process.env.FINNHUB_API_KEY;
  const headers = {
    'X-Finnhub-Token': API_KEY || '',
  };
  const url = `https://finnhub.io/api/v1/search?q=${query}`;

  const res = await fetch(url, { headers, next: { revalidate: 3600 } });

  if (!res.ok) {
    return { error: `Failed to fetch data from Finhub. Status: ${res.status} ${res.statusText}` };
  }

  const rawData = await res.json();
  const result = SearchResponseSchema.safeParse(rawData);

  if (!result.success) {
    return { error: `Failed to parse data from Finhub. Error: ${result.error.message}` };
  }

  return { data: result.data.result };
};