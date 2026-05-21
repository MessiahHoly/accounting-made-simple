import { Financials } from "../types/edinet-db";

export const fetchFinancialAnalysis = async (financials: Financials[]) => {
  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      // 'HTTP-Referer': `${process.env.YOUR_SITE_URL}`, // Optional. Site URL for rankings on openrouter.ai.
      // 'X-OpenRouter-Title': `${process.env.YOUR_SITE_NAME}`, // Optional. Site title for rankings on openrouter.ai.
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: 'google/gemma-4-31b-it:free',
      messages: [
        {
          role: 'user',
          content: `Here is the financial data for a company: ${JSON.stringify(financials)}. Please analyze this data and provide insights on the company's financial health, trends, and any potential red flags.`,
        },
      ],
    }),
    next: { revalidate: 3600 },
  });
  if (!response.ok) {
    // console.error(response);
    const errorText = await response.text();
    console.log("EXACT ERROR MESSAGE:", errorText);

    return { error: `Failed to fetch OpenRouter response: ${response.statusText}` };
  }
  const data = await response.json();
  // console.log(data);
  const completionText = data.choices[0].message.content;
  // console.log('OpenRouter response:', completionText);
  return { data: completionText };
};