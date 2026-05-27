import { Financials } from "../types/edinet-db";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({})

export const fetchFinancialAnalysis = async (financials: Financials[]) => {
  const financialDataString = JSON.stringify(financials)
  const prompt = `Here is the financial data for a company: ${financialDataString}. Please analyze this data and provide insights on the company's financial health, trends, and any potential red flags.`

  try {
    console.log("Attempting analysis with gemma-4-31b-it...");
    const response = await ai.models.generateContent({
      model: 'gemma-4-31b-it',
      contents: prompt
    })
    return { data: response.text }
  } catch (gemma31Error) {
    console.warn("gemma-4-31b-it threw an error. Trying stable Gemma MoE variant...", gemma31Error);
    try {
      const fallbackResponse = await ai.models.generateContent({
        model: 'gemma-4-26b-a4b-it',
        contents: prompt
      })
      return { data: fallbackResponse.text }
    } catch (gemma26Error) {
      console.error("gemma-4-26b-a4b-it also threw an error.", gemma26Error);
      try {
        const fallbackResponse = await ai.models.generateContent({
          model: 'gemma-2.5-flash',
          contents: prompt
        })
        return { data: fallbackResponse.text }
      } catch (gemma25Error) {
        console.warn("gemma-2.5-flash threw an error as well.", gemma25Error);
        return { error: "Failed to fetch financial analysis from all models." }
      }
    }
  }
}