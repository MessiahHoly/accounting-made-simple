// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
// import { Financials } from "@/lib/types/edinet-db";

// export function BalanceSheet({ data }: { data: Financials[] }) {
//   // Sort data by year ascending
//   const sortedData = [...data].sort((a, b) => a.fiscal_year - b.fiscal_year);

//   const formatCurrency = (val: number) =>
//     new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY', notation: 'compact' }).format(val);

//   return (
//     <Card className="w-full overflow-hidden">
//       <CardHeader className="bg-slate-50/50">
//         <CardTitle>Annual Balance Sheet Comparison</CardTitle>
//       </CardHeader>
//       <CardContent className="p-0">
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead className="w-50 font-bold text-slate-900">Category</TableHead>
//               {sortedData.map((year) => (
//                 <TableHead key={year.fiscal_year} className="text-right font-bold">
//                   FY {year.fiscal_year}
//                 </TableHead>
//               ))}
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {/* ASSETS SECTION */}
//             <TableRow className="bg-slate-50/50 font-semibold">
//               <TableCell colSpan={sortedData.length + 1}>Assets</TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell className="pl-6">Cash & Equivalents</TableCell>
//               {sortedData.map((y) => (
//                 <TableCell key={y.fiscal_year} className="text-right">{formatCurrency(y.cash)}</TableCell>
//               ))}
//             </TableRow>
//             <TableRow>
//               <TableCell className="pl-6 text-muted-foreground italic">Other Assets (Inferred)</TableCell>
//               {sortedData.map((y) => (
//                 <TableCell key={y.fiscal_year} className="text-right">{formatCurrency(y.total_assets - y.cash)}</TableCell>
//               ))}
//             </TableRow>
//             <TableRow className="font-bold border-t-2">
//               <TableCell>Total Assets</TableCell>
//               {sortedData.map((y) => (
//                 <TableCell key={y.fiscal_year} className="text-right">{formatCurrency(y.total_assets)}</TableCell>
//               ))}
//             </TableRow>

//             {/* LIABILITIES SECTION */}
//             <TableRow className="bg-slate-50/50 font-semibold">
//               <TableCell colSpan={sortedData.length + 1}>Liabilities & Equity</TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell className="pl-6">Total Liabilities</TableCell>
//               {sortedData.map((y) => (
//                 <TableCell key={y.fiscal_year} className="text-right">{formatCurrency(y.total_liabilities)}</TableCell>
//               ))}
//             </TableRow>
//             <TableRow>
//               <TableCell className="pl-6">Net Assets (Equity)</TableCell>
//               {sortedData.map((y) => (
//                 <TableCell key={y.fiscal_year} className="text-right">{formatCurrency(y.net_assets)}</TableCell>
//               ))}
//             </TableRow>
//             <TableRow className="font-bold border-t-2">
//               <TableCell>Total Liabilities & Equity</TableCell>
//               {sortedData.map((y) => (
//                 <TableCell key={y.fiscal_year} className="text-right">{formatCurrency(y.total_liabilities + y.net_assets)}</TableCell>
//               ))}
//             </TableRow>

//             {/* RATIOS SECTION */}
//             <TableRow className="bg-slate-50/50 font-semibold text-xs uppercase tracking-wider">
//               <TableCell colSpan={sortedData.length + 1}>Key Ratios</TableCell>
//             </TableRow>
//             <TableRow>
//               <TableCell className="pl-6">Equity Ratio</TableCell>
//               {sortedData.map((y) => (
//                 <TableCell key={y.fiscal_year} className="text-right">{(y.equity_ratio_official * 100).toFixed(1)}%</TableCell>
//               ))}
//             </TableRow>
//           </TableBody>
//         </Table>
//       </CardContent>
//     </Card>
//   );
// }

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

// export default function BalanceSheet({ data }: { data: any[] }) {
//   // 1. Sort by year DESCENDING (Latest first)
//   const sortedData = [...data].sort((a, b) => b.fiscal_year - a.fiscal_year);

//   const formatCurrency = (val: number) =>
//     new Intl.NumberFormat('ja-JP', {
//       style: 'currency',
//       currency: 'JPY',
//       notation: 'compact',
//       maximumFractionDigits: 1
//     }).format(val);

//   return (
//     <Card className="w-full">
//       <CardHeader className="border-b bg-slate-50/50">
//         <CardTitle className="text-lg">Annual Balance Sheet Comparison</CardTitle>
//       </CardHeader>
//       <CardContent className="p-0">
//         {/* Wrapper for horizontal scroll */}
//         <div className="relative w-full overflow-auto">
//           <Table className="min-w-[1000px]"> {/* Ensures columns don't squash */}
//             <TableHeader>
//               <TableRow className="hover:bg-transparent">
//                 {/* STICKY COLUMN */}
//                 <TableHead className="sticky left-0 z-20 w-[180px] bg-white border-r font-bold text-slate-900 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
//                   Category
//                 </TableHead>
//                 {sortedData.map((year) => (
//                   <TableHead key={year.fiscal_year} className="text-right font-bold min-w-[100px]">
//                     FY {year.fiscal_year}
//                   </TableHead>
//                 ))}
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {/* ASSETS SECTION */}
//               <TableRow className="bg-slate-100/50 font-semibold italic">
//                 <TableCell className="sticky left-0 z-20 bg-slate-100/50 border-r">Assets</TableCell>
//                 <TableCell colSpan={sortedData.length} />
//               </TableRow>

//               <TableRow className="group">
//                 <TableCell className="sticky left-0 z-20 bg-white border-r group-hover:bg-slate-50 pl-6 text-sm">Cash & Equiv.</TableCell>
//                 {sortedData.map((y) => (
//                   <TableCell key={y.fiscal_year} className="text-right font-mono text-xs">
//                     {formatCurrency(y.cash)}
//                   </TableCell>
//                 ))}
//               </TableRow>

//               <TableRow className="group font-bold border-t-2">
//                 <TableCell className="sticky left-0 z-20 bg-white border-r group-hover:bg-slate-50 text-sm">Total Assets</TableCell>
//                 {sortedData.map((y) => (
//                   <TableCell key={y.fiscal_year} className="text-right font-mono text-xs">
//                     {formatCurrency(y.total_assets)}
//                   </TableCell>
//                 ))}
//               </TableRow>

//               {/* LIABILITIES SECTION */}
//               <TableRow className="bg-slate-100/50 font-semibold italic">
//                 <TableCell className="sticky left-0 z-20 bg-slate-100/50 border-r">Liabilities & Equity</TableCell>
//                 <TableCell colSpan={sortedData.length} />
//               </TableRow>

//               <TableRow className="group">
//                 <TableCell className="sticky left-0 z-20 bg-white border-r group-hover:bg-slate-50 pl-6 text-sm">Total Liabilities</TableCell>
//                 {sortedData.map((y) => (
//                   <TableCell key={y.fiscal_year} className="text-right font-mono text-xs">
//                     {formatCurrency(y.total_liabilities)}
//                   </TableCell>
//                 ))}
//               </TableRow>

//               <TableRow className="group border-b">
//                 <TableCell className="sticky left-0 z-20 bg-white border-r group-hover:bg-slate-50 pl-6 text-sm">Net Assets</TableCell>
//                 {sortedData.map((y) => (
//                   <TableCell key={y.fiscal_year} className="text-right font-mono text-xs">
//                     {formatCurrency(y.net_assets)}
//                   </TableCell>
//                 ))}
//               </TableRow>

//               {/* RATIOS */}
//               <TableRow className="group bg-indigo-50/30">
//                 <TableCell className="sticky left-0 z-20 bg-indigo-50 border-r group-hover:bg-indigo-100 text-xs font-bold uppercase">Equity Ratio</TableCell>
//                 {sortedData.map((y) => (
//                   <TableCell key={y.fiscal_year} className="text-right font-bold text-indigo-700">
//                     {(y.equity_ratio_official * 100).toFixed(1)}%
//                   </TableCell>
//                 ))}
//               </TableRow>
//             </TableBody>
//           </Table>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

// "use client";

// import { useState } from "react";
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// export default function FinancialTable({ data }: { data: any[] }) {
//   const [range, setRange] = useState("5");

//   // 1. 降順（最新年が最初）にソート
//   const sortedData = [...data].sort((a, b) => b.fiscal_year - a.fiscal_year);

//   // 2. 選択された期間でフィルタリング
//   const filteredData =
//     range === "all" ? sortedData : sortedData.slice(0, parseInt(range));

//   const formatCurrency = (val: number) =>
//     new Intl.NumberFormat("ja-JP", {
//       style: "currency",
//       currency: "JPY",
//       notation: "compact",
//       maximumFractionDigits: 1,
//     }).format(val);

//   return (
//     <Card className="w-full">
//       <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b bg-slate-50/50">
//         <CardTitle className="text-base font-bold">貸借対照表（年度推移）</CardTitle>
//         <Tabs defaultValue="5" onValueChange={setRange} className="w-[200px]">
//           <TabsList className="grid w-full grid-cols-3">
//             <TabsTrigger value="3">3年</TabsTrigger>
//             <TabsTrigger value="5">5年</TabsTrigger>
//             <TabsTrigger value="all">全期間</TabsTrigger>
//           </TabsList>
//         </Tabs>
//       </CardHeader>
//       <CardContent className="p-0">
//         <div className="relative w-full overflow-auto">
//           {/* min-wを設定して横崩れを防止 */}
//           <Table className="min-w-[800px] border-separate border-spacing-0">
//             <TableHeader>
//               <TableRow className="hover:bg-transparent">
//                 {/* カテゴリ列を固定 */}
//                 <TableHead className="sticky left-0 z-30 w-[180px] bg-white border-r font-bold text-slate-900 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
//                   科目
//                 </TableHead>
//                 {filteredData.map((year) => (
//                   <TableHead key={year.fiscal_year} className="text-right font-bold min-w-[110px]">
//                     {year.fiscal_year}年度
//                   </TableHead>
//                 ))}
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {/* --- 資産の部 --- */}
//               <TableRow className="bg-slate-100/50 font-semibold">
//                 <TableCell className="sticky left-0 z-20 bg-slate-100/50 border-r py-2">資産の部</TableCell>
//                 <TableCell colSpan={filteredData.length} className="bg-slate-100/50" />
//               </TableRow>
//               <TableRow className="group">
//                 <TableCell className="sticky left-0 z-20 bg-white border-r group-hover:bg-slate-50 pl-6 text-sm">現金・預金</TableCell>
//                 {filteredData.map((y) => (
//                   <TableCell key={y.fiscal_year} className="text-right font-mono text-sm">{formatCurrency(y.cash)}</TableCell>
//                 ))}
//               </TableRow>
//               <TableRow className="group font-bold">
//                 <TableCell className="sticky left-0 z-20 bg-white border-r group-hover:bg-slate-50 text-sm">資産合計</TableCell>
//                 {filteredData.map((y) => (
//                   <TableCell key={y.fiscal_year} className="text-right font-mono text-sm border-t-2 border-slate-900">{formatCurrency(y.total_assets)}</TableCell>
//                 ))}
//               </TableRow>

//               {/* --- 負債・純資産の部 --- */}
//               <TableRow className="bg-slate-100/50 font-semibold">
//                 <TableCell className="sticky left-0 z-20 bg-slate-100/50 border-r py-2">負債・純資産の部</TableCell>
//                 <TableCell colSpan={filteredData.length} className="bg-slate-100/50" />
//               </TableRow>
//               <TableRow className="group">
//                 <TableCell className="sticky left-0 z-20 bg-white border-r group-hover:bg-slate-50 pl-6 text-sm">負債合計</TableCell>
//                 {filteredData.map((y) => (
//                   <TableCell key={y.fiscal_year} className="text-right font-mono text-sm">{formatCurrency(y.total_liabilities)}</TableCell>
//                 ))}
//               </TableRow>
//               <TableRow className="group">
//                 <TableCell className="sticky left-0 z-20 bg-white border-r group-hover:bg-slate-50 pl-6 text-sm border-b">純資産合計</TableCell>
//                 {filteredData.map((y) => (
//                   <TableCell key={y.fiscal_year} className="text-right font-mono text-sm border-b">{formatCurrency(y.net_assets)}</TableCell>
//                 ))}
//               </TableRow>

//               {/* --- 主要指標 --- */}
//               <TableRow className="bg-indigo-50/50">
//                 <TableCell className="sticky left-0 z-20 bg-indigo-50 border-r text-xs font-bold text-indigo-700 uppercase">自己資本比率</TableCell>
//                 {filteredData.map((y) => (
//                   <TableCell key={y.fiscal_year} className="text-right font-bold text-indigo-700">
//                     {(y.equity_ratio_official * 100).toFixed(1)}%
//                   </TableCell>
//                 ))}
//               </TableRow>
//             </TableBody>
//           </Table>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

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

export default function FinancialTable({ data }: { data: any[] }) {
  const [range, setRange] = useState("5");

  // 1. Sort descending (Latest year first)
  const sortedData = [...data].sort((a, b) => b.fiscal_year - a.fiscal_year);

  // 2. Filter based on selected range
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
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b bg-slate-50/50">
        <CardTitle className="text-base font-bold">Annual Balance Sheet Comparison</CardTitle>
        <Tabs defaultValue="5" onValueChange={setRange} className="w-[240px]">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="3">3 Years</TabsTrigger>
            <TabsTrigger value="5">5 Years</TabsTrigger>
            <TabsTrigger value="all">All</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative w-full overflow-auto">
          {/* Set min-w to prevent column squashing */}
          <Table className="min-w-[800px] border-separate border-spacing-0">
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                {/* Sticky Category Column */}
                <TableHead className="sticky left-0 z-30 w-[180px] bg-white border-r font-bold text-slate-900 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
                  Category
                </TableHead>
                {filteredData.map((year) => (
                  <TableHead key={year.fiscal_year} className="text-right font-bold min-w-[110px]">
                    FY {year.fiscal_year}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* --- ASSETS SECTION --- */}
              <TableRow className="bg-slate-100/50 font-semibold">
                <TableCell className="sticky left-0 z-20 bg-slate-100/50 border-r py-2 uppercase text-[10px] tracking-wider text-slate-500">Assets</TableCell>
                <TableCell colSpan={filteredData.length} className="bg-slate-100/50" />
              </TableRow>
              <TableRow className="group">
                <TableCell className="sticky left-0 z-20 bg-white border-r group-hover:bg-slate-50 pl-6 text-sm">Cash & Equivalents</TableCell>
                {filteredData.map((y) => (
                  <TableCell key={y.fiscal_year} className="text-right font-mono text-sm">{formatCurrency(y.cash)}</TableCell>
                ))}
              </TableRow>
              <TableRow className="group font-bold">
                <TableCell className="sticky left-0 z-20 bg-white border-r group-hover:bg-slate-50 text-sm">Total Assets</TableCell>
                {filteredData.map((y) => (
                  <TableCell key={y.fiscal_year} className="text-right font-mono text-sm border-t-2 border-slate-900">{formatCurrency(y.total_assets)}</TableCell>
                ))}
              </TableRow>

              {/* --- LIABILITIES & EQUITY SECTION --- */}
              <TableRow className="bg-slate-100/50 font-semibold">
                <TableCell className="sticky left-0 z-20 bg-slate-100/50 border-r py-2 uppercase text-[10px] tracking-wider text-slate-500">Liabilities & Equity</TableCell>
                <TableCell colSpan={filteredData.length} className="bg-slate-100/50" />
              </TableRow>
              <TableRow className="group">
                <TableCell className="sticky left-0 z-20 bg-white border-r group-hover:bg-slate-50 pl-6 text-sm">Total Liabilities</TableCell>
                {filteredData.map((y) => (
                  <TableCell key={y.fiscal_year} className="text-right font-mono text-sm">{formatCurrency(y.total_liabilities)}</TableCell>
                ))}
              </TableRow>
              <TableRow className="group">
                <TableCell className="sticky left-0 z-20 bg-white border-r group-hover:bg-slate-50 pl-6 text-sm border-b">Net Assets (Equity)</TableCell>
                {filteredData.map((y) => (
                  <TableCell key={y.fiscal_year} className="text-right font-mono text-sm border-b">{formatCurrency(y.net_assets)}</TableCell>
                ))}
              </TableRow>

              {/* --- KEY RATIOS --- */}
              <TableRow className="bg-indigo-50/50">
                <TableCell className="sticky left-0 z-20 bg-indigo-50 border-r text-[10px] font-bold text-indigo-700 uppercase tracking-wider">Equity Ratio</TableCell>
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
