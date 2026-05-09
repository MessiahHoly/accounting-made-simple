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

//   // 1. Sort descending (Latest year first)
//   const sortedData = [...data].sort((a, b) => b.fiscal_year - a.fiscal_year);

//   // 2. Filter based on selected range
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
//     <Card className="w-full overflow-hidden border-none shadow-none md:border md:shadow-sm">
//     {/* <Card className="w-full"> */}
//       <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b bg-slate-50/50">
//         <CardTitle className="text-base font-bold">Annual Balance Sheet Comparison</CardTitle>
//         <Tabs defaultValue="5" onValueChange={setRange} className="w-[240px]">
//           <TabsList className="grid w-full grid-cols-3">
//             <TabsTrigger value="3">3 Years</TabsTrigger>
//             <TabsTrigger value="5">5 Years</TabsTrigger>
//             <TabsTrigger value="all">All</TabsTrigger>
//           </TabsList>
//         </Tabs>
//       </CardHeader>
//       <CardContent className="p-0">
//         <div className="relative w-full overflow-auto">
//           {/* Set min-w to prevent column squashing */}
//           <Table className="min-w-[800px] border-separate border-spacing-0">
//             <TableHeader>
//               <TableRow className="hover:bg-transparent">
//                 {/* Sticky Category Column */}
//                 <TableHead className="sticky left-0 z-30 w-[180px] bg-white border-r font-bold text-slate-900 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">
//                   Category
//                 </TableHead>
//                 {filteredData.map((year) => (
//                   <TableHead key={year.fiscal_year} className="text-right font-bold min-w-[110px]">
//                     FY {year.fiscal_year}
//                   </TableHead>
//                 ))}
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {/* --- ASSETS SECTION --- */}
//               <TableRow className="bg-slate-100/50 font-semibold">
//                 <TableCell className="sticky left-0 z-20 bg-slate-100/50 border-r py-2 uppercase text-[10px] tracking-wider text-slate-500">Assets</TableCell>
//                 <TableCell colSpan={filteredData.length} className="bg-slate-100/50" />
//               </TableRow>
//               <TableRow className="group">
//                 <TableCell className="sticky left-0 z-20 bg-white border-r group-hover:bg-slate-50 pl-6 text-sm">Cash & Equivalents</TableCell>
//                 {filteredData.map((y) => (
//                   <TableCell key={y.fiscal_year} className="text-right font-mono text-sm">{formatCurrency(y.cash)}</TableCell>
//                 ))}
//               </TableRow>
//               <TableRow className="group font-bold">
//                 <TableCell className="sticky left-0 z-20 bg-white border-r group-hover:bg-slate-50 text-sm">Total Assets</TableCell>
//                 {filteredData.map((y) => (
//                   <TableCell key={y.fiscal_year} className="text-right font-mono text-sm border-t-2 border-slate-900">{formatCurrency(y.total_assets)}</TableCell>
//                 ))}
//               </TableRow>

//               {/* --- LIABILITIES & EQUITY SECTION --- */}
//               <TableRow className="bg-slate-100/50 font-semibold">
//                 <TableCell className="sticky left-0 z-20 bg-slate-100/50 border-r py-2 uppercase text-[10px] tracking-wider text-slate-500">Liabilities & Equity</TableCell>
//                 <TableCell colSpan={filteredData.length} className="bg-slate-100/50" />
//               </TableRow>
//               <TableRow className="group">
//                 <TableCell className="sticky left-0 z-20 bg-white border-r group-hover:bg-slate-50 pl-6 text-sm">Total Liabilities</TableCell>
//                 {filteredData.map((y) => (
//                   <TableCell key={y.fiscal_year} className="text-right font-mono text-sm">{formatCurrency(y.total_liabilities)}</TableCell>
//                 ))}
//               </TableRow>
//               <TableRow className="group">
//                 <TableCell className="sticky left-0 z-20 bg-white border-r group-hover:bg-slate-50 pl-6 text-sm border-b">Net Assets (Equity)</TableCell>
//                 {filteredData.map((y) => (
//                   <TableCell key={y.fiscal_year} className="text-right font-mono text-sm border-b">{formatCurrency(y.net_assets)}</TableCell>
//                 ))}
//               </TableRow>

//               {/* --- KEY RATIOS --- */}
//               <TableRow className="bg-indigo-50/50">
//                 <TableCell className="sticky left-0 z-20 bg-indigo-50 border-r text-[10px] font-bold text-indigo-700 uppercase tracking-wider">Equity Ratio</TableCell>
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
import { Financials } from "@/lib/types/edinet-db";

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
    /* overflow-hidden on the card prevents the internal table from leaking out */
    <Card className="w-full overflow-hidden border-none shadow-none md:border md:shadow-sm">
      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b bg-slate-50/50">
        <CardTitle className="text-base font-bold">Annual Balance Sheet Comparison</CardTitle>
        <Tabs defaultValue="5" onValueChange={setRange} className="w-full sm:w-[240px]">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="3">3Y</TabsTrigger>
            <TabsTrigger value="5">5Y</TabsTrigger>
            <TabsTrigger value="all">All</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent className="p-0">
        {/* scroll-x-auto handles the horizontal scroll for 'All' years */}
        <div className="relative w-full overflow-x-auto">
          <Table className="min-w-[800px] border-separate border-spacing-0">
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                {/* z-30 ensures this stays above other sticky elements */}
                <TableHead className="sticky left-0 z-30 w-[200px] bg-white border-r font-bold text-slate-900 shadow-[2px_0_8px_-2px_rgba(0,0,0,0.1)]">
                  Category
                </TableHead>
                {filteredData.map((year) => (
                  <TableHead key={year.fiscal_year} className="text-right font-bold min-w-[110px] bg-white">
                    FY {year.fiscal_year}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* --- ASSETS --- */}
              <TableRow className="bg-slate-50 font-semibold">
                <TableCell className="sticky left-0 z-20 bg-slate-50 border-r py-2 uppercase text-[10px] tracking-wider text-slate-500">Assets</TableCell>
                <TableCell colSpan={filteredData.length} className="bg-slate-50" />
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

              {/* --- LIABILITIES --- */}
              <TableRow className="bg-slate-50 font-semibold">
                <TableCell className="sticky left-0 z-20 bg-slate-50 border-r py-2 uppercase text-[10px] tracking-wider text-slate-500">Liabilities & Equity</TableCell>
                <TableCell colSpan={filteredData.length} className="bg-slate-50" />
              </TableRow>
              <TableRow className="group">
                <TableCell className="sticky left-0 z-20 bg-white border-r group-hover:bg-slate-50 pl-6 text-sm">Total Liabilities</TableCell>
                {filteredData.map((y) => (
                  <TableCell key={y.fiscal_year} className="text-right font-mono text-sm">{formatCurrency(y.total_liabilities)}</TableCell>
                ))}
              </TableRow>
              <TableRow className="group border-b">
                <TableCell className="sticky left-0 z-20 bg-white border-r group-hover:bg-slate-50 pl-6 text-sm">Net Assets (Equity)</TableCell>
                {filteredData.map((y) => (
                  <TableCell key={y.fiscal_year} className="text-right font-mono text-sm">{formatCurrency(y.net_assets)}</TableCell>
                ))}
              </TableRow>

              {/* --- RATIOS --- */}
              <TableRow className="bg-indigo-50/30">
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
