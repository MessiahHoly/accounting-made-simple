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

export const formatCurrencyInMillionAndBillion = (value: number) => {
  if (value >= 1000) {
    return `$${(value / 1000).toFixed(1)}B` // Formats 150000 into $150.0B
  }
  return `$${value}M`
}