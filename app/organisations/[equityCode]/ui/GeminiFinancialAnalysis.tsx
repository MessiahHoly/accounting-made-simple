import { fetchFinancialAnalysis } from "@/lib/data/google";
import { Financials } from "@/lib/types/edinet-db";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default async function GeminiFinancialAnalysis({ balanceSheets }: { balanceSheets: Financials[] }) {
    const financialAnalysisResponse = await fetchFinancialAnalysis(balanceSheets)
    if ("error" in financialAnalysisResponse) {
        console.error("Error fetching financial analysis:", financialAnalysisResponse.error)
        return <div>Error: {financialAnalysisResponse.error}</div>
    }
    const { data: analysis } = financialAnalysisResponse
  
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Financial Analysis</h2>
      <Markdown remarkPlugins={[remarkGfm]}>{analysis}</Markdown>
    </div>
  )
}