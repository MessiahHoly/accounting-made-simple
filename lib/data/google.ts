import { Financials } from "../types/edinet-db";
import { GoogleGenAI } from "@google/genai";


const ai = new GoogleGenAI({})

export const fetchFinancialAnalysis = async (financials: Financials[]) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemma-4-31b-it',
      contents: `Here is the financial data for a company: ${JSON.stringify(financials)}. Please analyze this data and provide insights on the company's financial health, trends, and any potential red flags.`
    })
    return { data: response.text }
  } catch (error) {
    console.error("Gemini API Error: ", error)
    return { error: "Failed to fetch financial analysis" }
  }
  // const response = await ai.models.generateContent({
  //   model: 'gemma-4-31b-it',
  //   contents: `Here is the financial data for a company: ${JSON.stringify(financials)}. Please analyze this data and provide insights on the company's financial health, trends, and any potential red flags.`
  // })
  // console.log(response);
  // return { data: response.text }
}

//TODO: remove open router