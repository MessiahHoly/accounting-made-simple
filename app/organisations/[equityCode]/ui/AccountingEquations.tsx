import { FinancialSummary } from "@/lib/types/j-quants";
import AccountingEquationRow from "./AccountingEquation";

export default function AccouningEquations({ financeSummaries }: { financeSummaries: FinancialSummary[] }) {
  return (
    <section className="mb-12">
      <h2 className="text-xl font-semibold mb-4">Accounting Equations</h2>
      <ul className="space-y-2">
        {financeSummaries.map(({ Code, CurPerEn, TA, Eq }) => (
          <AccountingEquationRow
            key={`${Code}-${CurPerEn}`}
            accountingEquation={{
              asOf: CurPerEn,
              assets: TA,
              liabilities: TA - Eq,
              ownersEquity: Eq
            }}
          />
        ))}
      </ul>
    </section>
  )
}