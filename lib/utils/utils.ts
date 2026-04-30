import { Decimal } from "@prisma/client/runtime/client";

export const getCleanFormData = (formData: FormData) => {
  const raw = Object.fromEntries(formData.entries());
  return Object.fromEntries(Object.entries(raw).filter(([key]) => !key.startsWith("$ACTION")));
}

export const formatCurrency = (value: Decimal) => {
  return new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" }).format(Number(value))
}