'use server'

export const fetchJQuantsData = async (code: string) => {
  const API_KEY = process.env.J_QUANTS_API_KEY;

  if(!API_KEY) {
    return { error: "J-Quants API key is not set in environment variables" };
  }
  // const url = `https://api.j-quants.com/v1/stock/${symbol}/balance?api_key=${API_KEY}`;
  const url = `https://api.jquants.com/v2/fins/summary?code=${code}`;
  // const url = `https://api.j-quants.com//v2/equities/bars/daily?code=${code}`;

  const res = await fetch(url, { next: { revalidate: 3600 }, headers: { 'x-api-key': API_KEY } });

  if (!res.ok) throw new Error("Failed to fetch data");

  console.log("Fetched data from J-Quants:", await res.clone().json());

  return res.json();
};