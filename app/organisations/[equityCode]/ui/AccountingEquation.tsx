import { AccountingEquation } from "@/generated/prisma/client";
import { formatCurrency } from "@/lib/utils/utils";

export default function AccountingEquationRow({ accountingEquation }: {
  accountingEquation: { asOf: Date; assets: number; liabilities: number; ownersEquity: number }
}) {
  const { asOf, assets, liabilities, ownersEquity } = accountingEquation;

  return (
    <li className="flex flex-col gap-2 py-4 border-b border-slate-100">
      {/* Date Header */}
      <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
        {asOf.toLocaleDateString()}
      </span>

      {/* The Equation */}
      <div className="flex flex-wrap items-baseline gap-2 text-lg">
        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-blue-600 uppercase">Assets</span>
          <span className="font-semibold text-slate-900">{formatCurrency(assets)}</span>
        </div>

        <span className="text-slate-400 font-light mx-1">=</span>

        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-500 uppercase">Liabilities</span>
          <span className="font-semibold text-slate-900">{formatCurrency(liabilities)}</span>
        </div>

        <span className="text-slate-400 font-light mx-1">+</span>

        <div className="flex flex-col">
          <span className="text-[10px] font-bold text-slate-500 uppercase">Owners' Equity</span>
          <span className="font-semibold text-slate-900">{formatCurrency(ownersEquity)}</span>
        </div>
      </div>
    </li>
  );
}