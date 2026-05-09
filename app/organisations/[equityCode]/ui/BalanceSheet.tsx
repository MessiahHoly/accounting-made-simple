"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Financials } from "@/lib/types/edinet-db";
import { Button } from "@/components/ui/button";
import { downloadCsv } from "@/lib/utils/client/utils";
import { Download } from "lucide-react";

export default function FinancialTable({ data }: { data: Financials[] }) {
  const [range, setRange] = useState("5");

  const sortedData = [...data].sort((a, b) => b.fiscal_year - a.fiscal_year);
  const filteredData =
    range === "all" ? sortedData : sortedData.slice(0, parseInt(range));

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("ja-JP", {
      style: "currency",
      currency: "JPY",
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(val);

  return (
    <Card className="w-full overflow-hidden border md:shadow-sm">
      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b bg-slate-50/50">
        <div>
          <CardTitle className="text-base font-bold">Annual Balance Sheet Comparison</CardTitle>
          <p className="text-xs text-muted-foreground mt-1">Export available for current view</p>
        </div>
        {/* <div className="flex items-center gap-2 w-full sm:w-auto">
          <Button variant="outline" size="sm" onClick={() => downloadCsv(filteredData)} className="hidden sm:flex gap-2">
            <Download className="h-4 w-4" />
            CSV
          </Button>
          <Tabs defaultValue="5" onValueChange={setRange} className="w-full sm:w-[240px]">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="3">3Y</TabsTrigger>
              <TabsTrigger value="5">5Y</TabsTrigger>
              <TabsTrigger value="all">All</TabsTrigger>
            </TabsList>
          </Tabs>
        </div> */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
          {/* Modified Button: Always visible, text only on larger screens */}
          <Button
            variant="outline"
            size="sm"
            onClick={() => downloadCsv(filteredData)}
            className="flex items-center gap-2"
          >
            <Download className="h-4 w-4" />
            <span className="hidden xs:inline sm:inline">CSV</span>
          </Button>

          <Tabs defaultValue="5" onValueChange={setRange} className="w-[180px] xs:w-[240px]">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="3">3Y</TabsTrigger>
              <TabsTrigger value="5">5Y</TabsTrigger>
              <TabsTrigger value="all">All</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

      </CardHeader>
      <CardContent className="p-0">
        <div className="relative w-full overflow-auto max-h-[70vh]">
          <Table className="min-w-[1000px] border-separate border-spacing-0 text-sm">
            <TableHeader className="sticky top-0 z-40">
              <TableRow className="hover:bg-transparent">
                <TableHead className="sticky left-0 top-0 z-50 w-[200px] bg-slate-100 border-r border-b font-bold text-slate-900">
                  Category
                </TableHead>
                {filteredData.map((year) => (
                  <TableHead key={year.fiscal_year} className="text-right font-bold min-w-[110px] bg-slate-100 border-b">
                    FY {year.fiscal_year}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="bg-slate-50/50 font-semibold italic text-slate-500">
                <TableCell className="sticky left-0 z-20 bg-slate-50/50 border-r py-1 text-[10px] uppercase">Assets</TableCell>
                <TableCell colSpan={filteredData.length} />
              </TableRow>
              <TableRow className="group">
                <TableCell className="sticky left-0 z-20 bg-white border-r group-hover:bg-slate-50 pl-6">Cash & Equivalents</TableCell>
                {filteredData.map((y) => (
                  <TableCell key={y.fiscal_year} className="text-right font-mono">{formatCurrency(y.cash)}</TableCell>
                ))}
              </TableRow>
              <TableRow className="group font-bold">
                <TableCell className="sticky left-0 z-20 bg-white border-r group-hover:bg-slate-50">Total Assets</TableCell>
                {filteredData.map((y) => (
                  <TableCell key={y.fiscal_year} className="text-right font-mono border-t-2 border-slate-900">{formatCurrency(y.total_assets)}</TableCell>
                ))}
              </TableRow>

              <TableRow className="bg-slate-50/50 font-semibold italic text-slate-500">
                <TableCell className="sticky left-0 z-20 bg-slate-50/50 border-r py-1 text-[10px] uppercase">Liabilities & Equity</TableCell>
                <TableCell colSpan={filteredData.length} />
              </TableRow>
              <TableRow className="group">
                <TableCell className="sticky left-0 z-20 bg-white border-r group-hover:bg-slate-50 pl-6">Total Liabilities</TableCell>
                {filteredData.map((y) => (
                  <TableCell key={y.fiscal_year} className="text-right font-mono">{formatCurrency(y.total_liabilities)}</TableCell>
                ))}
              </TableRow>
              <TableRow className="group border-b">
                <TableCell className="sticky left-0 z-20 bg-white border-r group-hover:bg-slate-50 pl-6">Net Assets (Equity)</TableCell>
                {filteredData.map((y) => (
                  <TableCell key={y.fiscal_year} className="text-right font-mono">{formatCurrency(y.net_assets)}</TableCell>
                ))}
              </TableRow>

              <TableRow className="bg-indigo-50/30">
                <TableCell className="sticky left-0 z-20 bg-indigo-50 border-r text-[10px] font-bold text-indigo-700 uppercase">Equity Ratio</TableCell>
                {filteredData.map((y) => (
                  <TableCell key={y.fiscal_year} className="text-right font-bold text-indigo-700">
                    {(y.equity_ratio_official * 100).toFixed(1)}%
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
