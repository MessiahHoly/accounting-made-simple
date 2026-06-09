"use client"

import React, { useMemo } from "react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"
// import { HistoricalFiling } from "./your-schema-file" // Update path
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"
import { HistoricalFiling } from "@/lib/types/finnhub"
import { formatCurrencyInMillionAndBillion } from "@/lib/utils/utils"

interface FinancialChartProps {
  filings: HistoricalFiling[]
}

// 1. Define styling and labeling for your target financial metrics
const chartConfig = {
  revenue: {
    label: "Total Revenue",
    color: "var(--chart-1)",
    // color: "hsl(var(--chart-1))",
  },
  netIncome: {
    label: "Net Income",
    color: "var(--chart-2)",
    // color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function HistoricalFilingFinancialChart({ filings }: FinancialChartProps) {
  // 2. Format and sort data so Recharts can read it sequentially
  const chartData = useMemo(() => {
    if (!filings || filings.length === 0) return []

    return filings
      .map((filing) => {
        // Find specific concepts in the income statement array ('ic')
        // Finnhub/SEC concepts typically use names like 'revenues' or 'netincome'
        const revenueMetric = filing.report.ic.find(
          (m) => m.concept.toLowerCase().includes("revenue") || m.concept === "Revenues"
        )
        const netIncomeMetric = filing.report.ic.find(
          (m) => m.concept.toLowerCase().includes("netincome") || m.concept === "NetIncomeLoss"
        )

        // Create a user-friendly label for the X-Axis (e.g., "2025 Q4" or "2025")
        const formattedPeriod = filing.quarter
          ? `${filing.year} Q${filing.quarter}`
          : `${filing.year || filing.endDate.slice(0, 4)}`

        return {
          period: formattedPeriod,
          rawDate: filing.endDate, // Used for logical sorting
          revenue: revenueMetric?.value ? revenueMetric.value / 1_000_000 : 0, // Convert to millions for scannability
          netIncome: netIncomeMetric?.value ? netIncomeMetric.value / 1_000_000 : 0,
        }
      })
      // Sort oldest to newest chronologically
      .sort((a, b) => new Date(a.rawDate).getTime() - new Date(b.rawDate).getTime())
  }, [filings])

  if (chartData.length === 0) {
    return (
      <Card>
        <CardContent className="pt-6 text-center text-muted-foreground">
          No chartable financial data available.
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Financial Performance</CardTitle>
        <CardDescription>Historical Revenue vs Net Income (In Millions)</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="min-h-75 w-full">
          <BarChart data={chartData} accessibilityLayer>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis
              dataKey="period"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              // tickFormatter={(value) => `$${value}M`}
              tickFormatter={formatCurrencyInMillionAndBillion}
            />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="revenue"
              fill="var(--color-revenue)"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="netIncome"
              fill="var(--color-netIncome)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
