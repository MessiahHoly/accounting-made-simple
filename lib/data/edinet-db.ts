'use server';

import { FinancialsApiResponseSchema, SearchResponseSchema } from "../types/edinet-db";

export const searchCompany = async (query: string) => {
  const apiKey = process.env.EDINET_DB_API_KEY;
  if (!apiKey) {
    return { error: 'EDINET_DB_API_KEY is not set in environment variables' };
  }

  const response = await fetch(
    `https://edinetdb.jp/v1/search?q=${encodeURIComponent(query)}`,
    {
      headers: {
        'X-API-KEY': apiKey,
      },
    }
  );

  if (!response.ok) {
    return { error: `Failed to search company: ${response.statusText}` };
  }

  const rawData = await response.json();
  const result = SearchResponseSchema.safeParse(rawData);

  // console.log(result)

  if (!result.success) {
    console.error("Zod validation error:", result.error);
    return { error: "Failed to parse API response" };
  }

  return { data: result.data.data };
};

export const fetchBalanceSheets = async (edinetCode: string) => {
  const apiKey = process.env.EDINET_DB_API_KEY;
  if (!apiKey) {
    return { error: 'EDINET_DB_API_KEY is not set in environment variables' };
  }

  const response = await fetch(
    `https://edinetdb.jp/v1/companies/${edinetCode}/financials`,
    {
      headers: {
        'X-API-KEY': apiKey,
      },
    }
  );

  if (!response.ok) {
    return { error: `Failed to fetch balance sheet: ${response.statusText}` };
  }

  const rawData = await response.json();
  const result = FinancialsApiResponseSchema.safeParse(rawData);

  console.log(result)

  if (!result.success) {
    return { error: "Failed to parse API response" };
  }

  return { data: result.data.data };
};