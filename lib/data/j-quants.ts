'use server'

import { error } from "console";
import { EquityListResponseSchema, FinancialSummaryListResponseSchema } from "../types/j-quants";

// import { ApiResponseSchema } from "../types/j-quants";

export const fetchFinanceSummary = async (code: string) => {
  const API_KEY = process.env.J_QUANTS_API_KEY;

  if (!API_KEY) {
    return { error: "J-Quants API key is not set in environment variables" };
  }
  const url = `https://api.jquants.com/v2/fins/summary?code=${code}`;

  const res = await fetch(url, { next: { revalidate: 3600 }, headers: { 'x-api-key': API_KEY } });
  if (!res.ok) return { error: "Failed to fetch data" };

  const rawData = await res.json();
  const result = FinancialSummaryListResponseSchema.safeParse(rawData);

  if (!result.success) {
    console.error("Zod validation error:", result.error);
    return { error: "Failed to parse API response" };
  }

  // console.log("Parsed finance summary data:", result.data);

  const data = result.data.data.sort((a, b) => new Date(b.CurPerEn).getTime() - new Date(a.CurPerEn).getTime());

  return { data };
};

export const fetchEquities = async () => {
  const API_KEY = process.env.J_QUANTS_API_KEY;

  if (!API_KEY) {
    return { error: "J-Quants API key is not set in environment variables" };
  }

  const url = `https://api.jquants.com/v2/equities/master`;
  const res = await fetch(url, { next: { revalidate: 3600 }, headers: { 'x-api-key': API_KEY } });

  if (!res.ok) return { error: "Failed to fetch data" };

  const rawData = await res.json();
  const result = EquityListResponseSchema.safeParse(rawData);

  if (!result.success) {
    console.error("Zod validation error:", result.error);
    return { error: "Failed to parse API response" };
  }

  return result.data;
};

export const fetchEquity = async (code: string) => {
  const equitiesResponse = await fetchEquities();

  if ("error" in equitiesResponse) {
    return { error: equitiesResponse.error };
  }

  const equity = equitiesResponse.data.find((eq) => eq.Code === code);

  if (!equity) {
    return { error: "Equity not found" };
  }

  return { data: equity };
};