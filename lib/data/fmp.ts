export const searchForCompany = async (query: string) => {
  console.log(`Searching for company with query: "${query}" using FMP API...`);
  const response = await fetch(
    `https://financialmodelingprep.com/stable/search-name?query=${query}&apikey=${process.env.FMP_API_KEY}`,
  );
  // console.log("FPM response: ",response);
  if (!response.ok) {
    return { error: `Failed to fetch company data for query: ${query}.  ${response.status} ${response.statusText}` };
  }
  const data = await response.json();
  return { data };
};
