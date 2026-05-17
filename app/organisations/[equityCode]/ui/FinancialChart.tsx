"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";
import { FinancialSummary } from "@/lib/types/j-quants";
import { useMemo } from "react";
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const chartConfig = {
  roe: {
    label: "Retrn on Equity (ROE)",
    color: "hsl(var(--chart-1))"
  },
  assetTurnover: {
    label: "Asset Turnover Ratio",
    color: "hsl(var(--chart-2))"
  }
}

export default function FinancialChart({ data }: { data: FinancialSummary[] }) {
  // Recharts requires chronological order (oldest to newest) to display lines left-to-right correctly
  const chartData = useMemo(() => {
    return [...data]
      .map((item) => ({
        date: item.CurPerEn,
        roe: parseFloat(item.metric.roe.toFixed(2)),
        assetTurnover: parseFloat(item.metric.assetTurnover.toFixed(4)),
      }))
      .reverse();
  }, [data]);

  if (!chartData.length) return null

  return (
    <Card className="w-full border md:shadow-sm">
      <CardHeader>
        <CardTitle className="text-base font-bold">Performance Over Time</CardTitle>
        <CardDescription>Historical trend analysis for ROE and Asset Turnover</CardDescription>
      </CardHeader>
      <CardContent>
        {/* ChartContainer acts as the wrapper processing the Shadcn chartConfig schema */}
        <ChartContainer config={chartConfig} className="h-87.5 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData} margin={{ top: 20, right: 20, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} className="stroke-muted" />
              <XAxis dataKey="date" tickLine={false} axisLine={false} tickMargin={8} className="text-xs fill-muted-foreground" />
              {/* Left Y-Axis for ROE percentage */}
              <YAxis yAxisId="left" tickLine={false} axisLine={false} tickMargin={8} className="text-xs fill-muted-foreground"
                tickFormatter={value => `${value}%`} />
              {/* Right Y-Axis for Ratio Multipliers */}
              <YAxis yAxisId="right" orientation="right" tickLine={false} axisLine={false} tickMargin={8} className="text-xs fill-muted-foreground"
                tickFormatter={value => `${value}x`} />
              <Tooltip content={<ChartTooltipContent />} />
              <Legend verticalAlign="top" height={36} iconType="circle" />
              <Line yAxisId="left" type="monotone" dataKey="roe" name={chartConfig.roe.label} stroke={chartConfig.roe.color}
                strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
              <Line yAxisId="right" type="monotone" dataKey="assetTurnover" name={chartConfig.assetTurnover.label}
                stroke={chartConfig.assetTurnover.color} strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

//TODO: Fix bug
// 💡 A Quick Bug Warning for Your Current CodeIn your current code, new Date(b.CurPerEn) will fail or behave unexpectedly.Inside your Zod schema, CurPerEn is already transformed into a JavaScript Date object.In your .sort() method, you should call .getTime() directly on the object without wrapping it in new Date() again:typescript// Change this:
// .sort((a, b) => new Date(b.CurPerEn).getTime() - new Date(a.CurPerEn).getTime())

// // To this:
// .sort((a, b) => b.CurPerEn.getTime() - a.CurPerEn.getTime())
// Use code with caution.If you want to implement one of these changes, let me know:Do you plan to use this processed data in multiple UI components?Do you need to handle cases where Eq or TA are zero to avoid Infinity or NaN math errors?