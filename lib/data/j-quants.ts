'use server'

import { error } from "console";
import { EquityListResponseSchema, FinancialSummaryListResponseSchema } from "../types/j-quants";

// import { ApiResponseSchema } from "../types/j-quants";

export const fetchFinanceSummary = async (code: string) => {
  // export const fetchJQuantsData = async (code: string) => {
  const API_KEY = process.env.J_QUANTS_API_KEY;

  if (!API_KEY) {
    return { error: "J-Quants API key is not set in environment variables" };
    // return { message: "J-Quants API key is not set in environment variables", data: [], status: 500 };
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

  console.log("Parsed finance summary data:", result.data);

  return result.data;
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