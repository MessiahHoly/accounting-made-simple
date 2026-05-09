'use client'

import { Financials } from "@/lib/types/edinet-db"

export const downloadCsv = (financials: Financials[]) => {
  const headers = ["Category", ...financials.map(f => `FY ${f.fiscal_year}`)].join(",")

  const rows = [
    ["Cash & Equivalents", ...financials.map(f => f.cash)],
    ["Total Assets", ...financials.map(f => f.total_assets)],
    ["Total Liabilities", ...financials.map(f => f.total_liabilities)],
    ["Net Assets", ...financials.map(f => f.net_assets)],
    ["Equity Ratio (%)", ...financials.map(f => (f.equity_ratio_official * 100).toFixed(2))],
  ]

  const csvContent = [headers, ...rows.map(row => row.join(","))].join("\n")
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.setAttribute("href", url)
  link.setAttribute("download", `financial_report_${new Date().toISOString().split("T")[0]}.csv`)
  link.click()
}