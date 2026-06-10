"use client";

import { useState } from "react";
// Assumed shadcn/ui component structure
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { HistoricalFiling } from "@/lib/types/finnhub";

// interface FinancialDashboardProps {
//   rawData: any[]; // Pass the parsed JSON array from your text file here
// }

// Utility to format values nicely
const formatValue = (value: number, unit: string) => {
  if (unit === "usd/share") {
    return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
  }
  if (unit === "shares") {
    return new Intl.NumberFormat("en-US").format(value);
  }

  // For large financial numbers, express in Millions
  const valueInMillions = value / 1_000_000;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(valueInMillions) + "M";
};

// Check if a line is a sub-total or total line to apply heavier styling
const isTotalLine = (label: string) => {
  const lower = label.toLowerCase();
  return lower.includes("total") || lower.includes("net income") || lower.includes("gross profit");
};

export default function FinancialDashboard({ data }: { data: HistoricalFiling[] }) {
  // Default to the most recent year's data available
  const [selectedYear, setSelectedYear] = useState(() => {
    if (!data || data.length === 0) {
      return new Date().getFullYear().toString(); // Dynamically falls back to current year (e.g., 2026, 3000)
    }

    const maxYear = Math.max(...data.map(item => item.year || 0));
    return maxYear > 0 ? maxYear.toString() : new Date().getFullYear().toString();
  });
  const [activeTab, setActiveTab] = useState("bs");

  const currentYearData = data.find((d) => d.year?.toString() === selectedYear);

  if (!currentYearData) {
    return <div className="p-6 text-center text-red-500">No data found for the selected period.</div>;
  }

  const reportSections = [
    { id: "bs", title: "Balance Sheet", description: "Statement of Financial Position" },
    { id: "ic", title: "Income Statement", description: "Statement of Earnings and Revenue" },
    { id: "cf", title: "Cash Flow", description: "Statement of Cash Flow Operations" },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* Dashboard Top Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 border-b gap-4">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-50">
            {currentYearData.symbol ? `${currentYearData.symbol} Financial Statements` : "Financial Statements"}
          </h3>
          {/* <h3>
            Financials
          </h3> */}
          {/* <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
            {currentYearData.symbol} Financials
          </h1> */}
          {/* <p className="text-sm text-muted-foreground mt-1">
            Form {currentYearData.form} • Filed: {new Date(currentYearData.filedDate).toLocaleDateString()}
          </p> */}
        </div>

        {/* Year Dropdown Controller */}
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-muted-foreground">Fiscal Year:</span>
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="w-30">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent>
              {data.map((item) => (
                <SelectItem key={item.year} value={item.year?.toString() || "unknown"}>
                  {item.year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        {/* REMOVED 'grid' and 'grid-cols-3'. ADDED horizontal scroll classes */}
        <TabsList className="flex w-full justify-start overflow-x-auto overflow-y-hidden max-w-md mb-4 scrollbar-none snap-x">
          <TabsTrigger value="bs" className="snap-mini">Balance Sheet</TabsTrigger>
          <TabsTrigger value="ic" className="snap-mini">Income Statement</TabsTrigger>
          <TabsTrigger value="cf" className="snap-mini">Cash Flow</TabsTrigger>
        </TabsList>

        {reportSections.map((section) => {
          const reportKey = section.id as "bs" | "ic" | "cf";
          const rows = currentYearData.report[reportKey];

          return (
            <TabsContent key={section.id} value={section.id} className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>{section.title}</CardTitle>
                  <CardDescription>{section.description} (Values in Millions USD unless specified)</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="rounded-md border overflow-x-auto">
                    <Table>
                      <TableHeader className="bg-slate-50 dark:bg-slate-900">
                        <TableRow>
                          {/* CHANGE: Added min-w and max-w constraints to prevent massive stretching */}
                          <TableHead className="w-[60%] min-w-50 max-w-100">Line Item</TableHead>
                          {/* <TableHead className="w-[60%] min-w-[200px] max-w-[400px]">Line Item</TableHead> */}
                          <TableHead className="text-right w-[40%] min-w-25">Value</TableHead>
                          {/* <TableHead className="text-right w-[40%] min-w-[100px]">Value</TableHead> */}
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {rows.map((row, index) => {
                          const isTotal = isTotalLine(row.label);
                          return (
                            <TableRow
                              key={`${row.concept}-${index}`}
                              className={isTotal ? "bg-slate-100/60 dark:bg-slate-800/60 font-semibold border-t border-b border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800" : ""}
                            >
                              {/* CHANGE: Added whitespace-normal and break-words to handle long stock strings */}
                              <TableCell className={`text-sm text-slate-800 dark:text-slate-200 whitespace-normal wrap-break-word max-w-100 ${isTotal ? "pl-4 text-slate-950 dark:text-white" : "pl-6"}`}>
                                {row.label}
                              </TableCell>
                              <TableCell className={`text-sm text-right font-mono ${isTotal ? "text-slate-950 dark:text-white font-bold" : "text-slate-600 dark:text-slate-400"}`}>
                                {row.value && formatValue(row.value, row.unit)}
                              </TableCell>
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}