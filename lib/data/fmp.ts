import { CompanyResponseSchema } from "../types/fmp";

export const searchForCompany = async (query: string) => {
  const response = await fetch(
    `https://financialmodelingprep.com/stable/search-name?query=${query}&apikey=${process.env.FMP_API_KEY}`,
  );

  if (!response.ok) {
    return { error: `Failed to fetch company data for query: ${query}.  ${response.status} ${response.statusText}` };
  }

  const rawData = await response.json();
  const result = CompanyResponseSchema.safeParse(rawData);

  if (!result.success) {
    return { error: `Failed to parse company data for query: ${query}.  ${result.error.message}` };
  }

  return { data: result.data };
};
