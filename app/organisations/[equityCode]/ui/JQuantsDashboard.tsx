import { Suspense } from "react";
import { DashboardLayout } from "./DashboardLayout";
import AiIsThinking from "./AiIsThinking";
import GeminiFinancialAnalysis from "./GeminiFinancialAnalysis";
import FinancialChart from "./FinancialChart";
import FinancialTable from "./BalanceSheet";
import AccouningEquations from "./AccountingEquations";
import { Financials } from "@/lib/types/edinet-db";
import { Equity, FinancialSummary } from "@/lib/types/j-quants";

export const JQuantsDashboard = ({ balanceSheets, financeSummaries, equity, language }: {
  balanceSheets: Financials[], financeSummaries: FinancialSummary[], equity: Equity, language?: string
}) => {
  return (
    <DashboardLayout
      title={equity?.CoName}
      subtitle={equity ? `${equity.Code} - ${equity.CoNameEn}` : undefined}
    >
      <Suspense fallback={<AiIsThinking />}>
        <GeminiFinancialAnalysis financials={balanceSheets} language={language} />
      </Suspense>

      <div className="mb-12">
        <FinancialChart data={financeSummaries} />
      </div>

      <FinancialTable data={balanceSheets} />
      <AccouningEquations financeSummaries={financeSummaries} />
    </DashboardLayout>
  );
}