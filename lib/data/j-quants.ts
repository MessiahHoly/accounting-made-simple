'use server'

import { EquityListResponseSchema, FinancialSummaryListResponseSchema } from "../types/j-quants";

export const fetchFinanceSummary = async (code: string) => {
  const API_KEY = process.env.J_QUANTS_API_KEY;

  if (!API_KEY) {
    return { error: "J-Quants API key is not set in environment variables" };
  }
  const url = `https://api.jquants.com/v2/fins/summary?code=${code}`;

  const res = await fetch(url, { next: { revalidate: 3600 }, headers: { 'x-api-key': API_KEY } });
  if (!res.ok) return { error: "Failed to fetch data" };
  // console.log(res)

  const rawData = await res.json();
  // console.log(rawData)
  const result = FinancialSummaryListResponseSchema.safeParse(rawData);

  // console.log(result)

  if (!result.success) {
    console.error("Zod validation error:", result.error);
    return { error: "Failed to parse API response" };
  }

  // const data = result.data.data
  //   .sort((a, b) => b.CurPerEn.getTime() - a.CurPerEn.getTime())
  //   .map((item) => {
  //     const roe = item.Eq !== 0 ? ((item.NP / item.Eq) * 100) : 0
  //     const assetTurnover = item.TA !== 0 ? item.Sales / item.TA : 0
  //     return { ...item, metric: { roe, assetTurnover } }
  //   });

  // const sortedData = result.data.data.sort((a, b) => b.CurPerEn.getTime() - a.CurPerEn.getTime());
  // const dedupedData = sortedData.filter((item, index, self) =>
  //   index === self.findIndex((t) => t.CurPerEn.getTime() === item.CurPerEn.getTime()));
  // const data = dedupedData.map((item) => {
  //   const roe = item.Eq !== 0 ? ((item.NP / item.Eq) * 100) : 0
  //   const assetTurnover = item.TA !== 0 ? item.Sales / item.TA : 0
  //   return { ...item, metric: { roe, assetTurnover } }
  // });

  const data = result.data.data
    .sort((a, b) => b.CurPerEn.getTime() - a.CurPerEn.getTime())
    .filter((item, index, self) => index === self.findIndex((t) => t.CurPerEn.getTime() === item.CurPerEn.getTime()))
    .map((item) => {
      const roe = item.Eq !== 0 ? ((item.NP / item.Eq) * 100) : 0
      const assetTurnover = item.TA !== 0 ? item.Sales / item.TA : 0
      return { ...item, metric: { roe, assetTurnover } }
    });

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

  // console.log(result)

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