'use server'

import { Financials } from "../types/edinet-db";
import { GoogleGenAI } from "@google/genai";
import { HistoricalFiling } from "../types/finnhub";

const ai = new GoogleGenAI({})

export const fetchFinancialAnalysis = async (financials: Financials[] | HistoricalFiling[], language?: string) => {
  const financialDataString = JSON.stringify(financials)
  const prompt = `Here is the financial data for a company: ${financialDataString}. Please analyze this data and provide insights on the company's financial health, trends, and any potential red flags.`
  const systemInstruction = `You are a helpful expert. You must reply entirely in ${language || 'English'}.`
//   CRITICAL MARKDOWN FORMATTING RULES:
// 1. For ANY mathematical expressions, inline formulas, or specific calculations (e.g., FCF = OCF - CapEx), you MUST wrap them in standard LaTeX delimiters.
// 2. Use single dollar signs ($...$) for inline math.
// 3. Use double dollar signs ($$...$$) on a new line for standalone block math/equations.
// 4. NEVER escape dollar signs with a backslash (do NOT use \\$). If you want to display currency like five billion dollars, write "$5B" or "$5 billion" directly inside or outside the math block.
// 5. Example of correct inline formatting: Free Cash Flow (FCF): $FCF = \\text{OCF} - \\text{CapEx} = \\text{\$8.43B} - \\text{\$5.87B} = \\mathbf{\\$2.56\\text{ billion}}$.`

  try {
    console.log("Attempting analysis with gemma-4-31b-it...");
    const response = await ai.models.generateContent({
      model: 'gemma-4-31b-it',
      contents: prompt,
      config: { systemInstruction }
    })
    return { data: response.text }
  } catch (gemma31Error) {
    console.warn("gemma-4-31b-it threw an error. Trying stable Gemma MoE variant...", gemma31Error);
    try {
      const fallbackResponse = await ai.models.generateContent({
        model: 'gemma-4-26b-a4b-it',
        contents: prompt,
        config: { systemInstruction }
      })
      return { data: fallbackResponse.text }
    } catch (gemma26Error) {
      console.error("gemma-4-26b-a4b-it also threw an error.", gemma26Error);
      try {
        const fallbackResponse = await ai.models.generateContent({
          model: 'gemma-2.5-flash',
          contents: prompt,
          config: { systemInstruction }
        })
        return { data: fallbackResponse.text }
      } catch (gemma25Error) {
        console.warn("gemma-2.5-flash threw an error as well.", gemma25Error);
        return { error: "Failed to fetch financial analysis from all models." }
      }
    }
  }
}