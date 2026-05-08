import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Financials } from "@/lib/types/edinet-db";

// interface FinancialData {
//   fiscal_year: number;
//   total_assets: number;
//   cash: number;
//   total_liabilities: number;
//   net_assets: number;
//   equity_ratio_official: number;
// }

export function BalanceSheet({ data }: { data: Financials[] }) {
// export function BalanceSheet({ data }: { data: FinancialData[] }) {
  // Sort data by year ascending
  const sortedData = [...data].sort((a, b) => a.fiscal_year - b.fiscal_year);

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY', notation: 'compact' }).format(val);

  return (
    <Card className="w-full overflow-hidden">
      <CardHeader className="bg-slate-50/50">
        <CardTitle>Annual Balance Sheet Comparison</CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[200px] font-bold text-slate-900">Category</TableHead>
              {sortedData.map((year) => (
                <TableHead key={year.fiscal_year} className="text-right font-bold">
                  FY {year.fiscal_year}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {/* ASSETS SECTION */}
            <TableRow className="bg-slate-50/50 font-semibold">
              <TableCell colSpan={sortedData.length + 1}>Assets</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="pl-6">Cash & Equivalents</TableCell>
              {sortedData.map((y) => (
                <TableCell key={y.fiscal_year} className="text-right">{formatCurrency(y.cash)}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="pl-6 text-muted-foreground italic">Other Assets (Inferred)</TableCell>
              {sortedData.map((y) => (
                <TableCell key={y.fiscal_year} className="text-right">{formatCurrency(y.total_assets - y.cash)}</TableCell>
              ))}
            </TableRow>
            <TableRow className="font-bold border-t-2">
              <TableCell>Total Assets</TableCell>
              {sortedData.map((y) => (
                <TableCell key={y.fiscal_year} className="text-right">{formatCurrency(y.total_assets)}</TableCell>
              ))}
            </TableRow>

            {/* LIABILITIES SECTION */}
            <TableRow className="bg-slate-50/50 font-semibold">
              <TableCell colSpan={sortedData.length + 1}>Liabilities & Equity</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="pl-6">Total Liabilities</TableCell>
              {sortedData.map((y) => (
                <TableCell key={y.fiscal_year} className="text-right">{formatCurrency(y.total_liabilities)}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="pl-6">Net Assets (Equity)</TableCell>
              {sortedData.map((y) => (
                <TableCell key={y.fiscal_year} className="text-right">{formatCurrency(y.net_assets)}</TableCell>
              ))}
            </TableRow>
            <TableRow className="font-bold border-t-2">
              <TableCell>Total Liabilities & Equity</TableCell>
              {sortedData.map((y) => (
                <TableCell key={y.fiscal_year} className="text-right">{formatCurrency(y.total_liabilities + y.net_assets)}</TableCell>
              ))}
            </TableRow>

            {/* RATIOS SECTION */}
            <TableRow className="bg-slate-50/50 font-semibold text-xs uppercase tracking-wider">
              <TableCell colSpan={sortedData.length + 1}>Key Ratios</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="pl-6">Equity Ratio</TableCell>
              {sortedData.map((y) => (
                <TableCell key={y.fiscal_year} className="text-right">{(y.equity_ratio_official * 100).toFixed(1)}%</TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
