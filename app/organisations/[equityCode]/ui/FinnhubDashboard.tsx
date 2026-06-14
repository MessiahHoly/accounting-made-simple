import { Suspense } from "react";
import { DashboardLayout } from "./DashboardLayout";
import AiIsThinking from "./AiIsThinking";
import GeminiFinancialAnalysis from "./GeminiFinancialAnalysis";
import { HistoricalFilingFinancialChart } from "./HistoricalFilingFinancialChart";
import FinancialDashboard from "./FinancialDashboard";
import { CompanyProfile, HistoricalFiling } from "@/lib/types/finnhub";

//TODO: Rename HistoricalFiling so that we know it's from finnhub and not edinet-db, or make it more generic if possible. --- IGNORE ---

export const FinnhubDashboard = ({ financials, companyProfile, language }: {
  financials: HistoricalFiling[], companyProfile: CompanyProfile, language?: string
}) => {
  return (
    <DashboardLayout
      title={companyProfile?.name}
      subtitle={companyProfile ? `${companyProfile.ticker} - ${companyProfile.exchange}` : undefined}
    >
      <Suspense fallback={<AiIsThinking />}>
        <GeminiFinancialAnalysis financials={financials} language={language} />
      </Suspense>

      <div className="mb-12">
        <HistoricalFilingFinancialChart filings={financials} />
      </div>

      <FinancialDashboard data={financials} />
    </DashboardLayout>
  );
}