import { Financials } from "../types/edinet-db";
import { GoogleGenAI } from "@google/genai";

//TODO: fix 15 vulnerabilities (13 moderate, 2 high)

const ai = new GoogleGenAI({})

export const fetchFinancialAnalysis = async (financials: Financials[]) => {
  try {
    const prompt = `Here is the financial data for a company: ${JSON.stringify(financials)}. Please analyze this data and provide insights on the company's financial health, trends, and any potential red flags.`

    try {
      const response = await ai.models.generateContent({
        model: 'gemma-4-31b-it',
        contents: prompt
      })
      return { data: response.text }
    } catch (gemmaError) {
      console.error("Gemini API Error: ", gemmaError)
      // return { error: "Failed to fetch financial analysis" }
      const fallbackResponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt
      })
      return { data: fallbackResponse.text }
    }
  }

  catch (error) {
    console.error("Gemini API Error: ", error)
    return { error: "Failed to fetch financial analysis" }
  }
}

//TODO: remove open router

//TODO: fix same key issue when querying INPEX