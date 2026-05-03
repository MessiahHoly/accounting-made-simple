'use server'

import { ApiResponseSchema, FinancialSummary, JQuantsApiResponse } from "../types/j-quants";

export const fetchJQuantsData = async (code: string): Promise<JQuantsApiResponse> => {
// export const fetchJQuantsData = async (code: string): Promise<JQuantsApiResponse> => {
// export const fetchJQuantsData = async (code: string): Promise<JQuantsFinancialSummaryApiResponse> => {
  const API_KEY = process.env.J_QUANTS_API_KEY;

  if (!API_KEY) {
    return { message: "J-Quants API key is not set in environment variables", data: [], status: 500 };
  }
  // const url = `https://api.j-quants.com/v1/stock/${symbol}/balance?api_key=${API_KEY}`;
  const url = `https://api.jquants.com/v2/fins/summary?code=${code}`;
  // const url = `https://api.j-quants.com//v2/equities/bars/daily?code=${code}`;

  const res = await fetch(url, { next: { revalidate: 3600 }, headers: { 'x-api-key': API_KEY } });

  if (!res.ok) return { message: "Failed to fetch data", data: [], status: res.status };

  // console.log("Fetched data from J-Quants:", await res.clone().json());

  const rawData = await res.json();

  if (rawData.status !== 200) {
    return { message: rawData.message || "Error from J-Quants API", data: [], status: rawData.status || 500 };
  }

  return ApiResponseSchema.parse(rawData);
  // return JQuantsFinancialSummaryApiResponseSchema.parse(rawData);
  // if (!res.ok) throw new Error("Failed to fetch data");

  // console.log("Fetched data from J-Quants:", await res.clone().json());

  // return res.json();
};