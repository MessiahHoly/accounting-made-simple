'use server';

export const fetchBalanceSheet = async (edinetCode: string) => {
  const apiKey = process.env.EDINET_DB_API_KEY;
  if (!apiKey) {
    // throw new Error('EDINET_DB_API_KEY is not set in environment variables');
    return { error: 'EDINET_DB_API_KEY is not set in environment variables' };
  }

  const response = await fetch(
    `https://edinetdb.jp/v1/companies/${edinetCode}/financials`,
    // `https://api.edinet-db.com/v1/companies/${edinetCode}/financials`,
    // `https://api.edinet-db.com/v1/financials/balance-sheet?edinetCode=${edinetCode}`,
    {
      headers: {
        'X-API-KEY': apiKey,
      },
    }
  );

  if (!response.ok) {
    // throw new Error(`Failed to fetch balance sheet: ${response.statusText}`);
    return { error: `Failed to fetch balance sheet: ${response.statusText}` };
  }

  const data = await response.json();
  return data;
};