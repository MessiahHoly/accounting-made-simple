import { Decimal } from "@prisma/client/runtime/client";
import { FinancialSummary } from "../types/j-quants";
import { Financials } from "../types/edinet-db";
import { Company } from "../types/fmp";
import { TickerMatch } from "../types/alpha-vantage";

export const getCleanFormData = (formData: FormData) => {
  const raw = Object.fromEntries(formData.entries());
  return Object.fromEntries(Object.entries(raw).filter(([key]) => !key.startsWith("$ACTION")));
}

export const formatCurrency = (value: Decimal | number) => {
  return new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" }).format(Number(value))
}

export const getAccountingEquation = (jQuantsData: FinancialSummary[]) => {
  return jQuantsData.map(({ TA, Eq, CurPerEn, Code }) => {
    const assets = Number(TA);
    const equity = Number(Eq);
    const liabilities = assets - equity;
    return { assets, equity, liabilities, code: Code, asOf: CurPerEn };
  });
}

export const transformFmpCompanyToEquityObject = (ticker: TickerMatch) => {
  return {
    Code: ticker.symbol,
    CoName: ticker.name,
    CoNameEn: ticker.name,
  };
};
// export const transformFmpCompanyToEquityObject = (company: Company) => {
//   return {
//     Code: company.symbol,
//     CoName: company.name,
//     CoNameEn: company.name,
//   };
// };