'use server'

import { ApiResponseSchema } from "../types/j-quants";

export const fetchJQuantsData = async (code: string) => {
  const API_KEY = process.env.J_QUANTS_API_KEY;

  if (!API_KEY) {
    return { message: "J-Quants API key is not set in environment variables", data: [], status: 500 };
  }
  const url = `https://api.jquants.com/v2/fins/summary?code=${code}`;

  const res = await fetch(url, { next: { revalidate: 3600 }, headers: { 'x-api-key': API_KEY } });

  if (!res.ok) return { message: "Failed to fetch data", data: [], status: res.status };

  const rawData = await res.json();
  // console.log("Raw data from J-Quants API:", rawData);

  const result = ApiResponseSchema.safeParse(rawData);

  if (!result.success) {
    console.error("Zod validation error:", result.error);
    return { message: "Failed to parse API response", data: [], status: 500 };
  }

  return result.data;
};

export const fetchEquities = async () => {
  const API_KEY = process.env.J_QUANTS_API_KEY;

  if (!API_KEY) {
    return { message: "J-Quants API key is not set in environment variables", data: [], status: 500 };
  }

  const url = `https://api.jquants.com/v2/equities/master`;

  const res = await fetch(url, { next: { revalidate: 3600 }, headers: { 'x-api-key': API_KEY } });

  if (!res.ok) return { message: "Failed to fetch data", data: [], status: res.status };

  const rawData = await res.json();

  console.log("Raw data from J-Quants API (Equities):", rawData);

  // const result = ApiResponseSchema.safeParse(rawData);

  // if (!result.success) {
  //   console.error("Zod validation error:", result.error);
  //   return { message: "Failed to parse API response", data: [], status: 500 };
  // }

  // return result.data;
};