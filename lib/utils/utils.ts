import { Decimal } from "@prisma/client/runtime/client";
import { FinancialSummary } from "../types/j-quants";
// import { JQuantsFinancialSummary } from "../types/j-quants";

export const getCleanFormData = (formData: FormData) => {
  const raw = Object.fromEntries(formData.entries());
  return Object.fromEntries(Object.entries(raw).filter(([key]) => !key.startsWith("$ACTION")));
}

export const formatCurrency = (value: Decimal | number) => {
  // export const formatCurrency = (value: Decimal) => {
  return new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" }).format(Number(value))
}

export const getAccountingEquation = (jQuantsData: FinancialSummary[]) => {
// export const getAccountingEquation = (jQuantsData: JQuantsFinancialSummary[]) => {
  // console.log("Raw J-Quants data:", jQuantsData);

  return jQuantsData.map(({ TA, Eq, CurPerEn, Code }) => {
    const assets = Number(TA);
    const equity = Number(Eq);
    const liabilities = assets - equity;
    return { assets, equity, liabilities, code: Code, asOf: CurPerEn };
  });
}