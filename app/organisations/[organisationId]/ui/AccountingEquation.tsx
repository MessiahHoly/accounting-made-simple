import { AccountingEquation } from "@/generated/prisma/client";
import { formatCurrency } from "@/lib/utils/utils";

export default function AccountingEquationRow({ accountingEquation }: { accountingEquation: AccountingEquation }) {
  const { asOf, assets, liabilities, ownersEquity } = accountingEquation;

  return (
    <li>
      <strong>{asOf.toLocaleDateString()}</strong>
      <p>Assets: {formatCurrency(assets)}</p>
      <p>Liabilities: {formatCurrency(liabilities)}</p>
      <p>Owners' Equity: {formatCurrency(ownersEquity)}</p>
    </li>
  );
}