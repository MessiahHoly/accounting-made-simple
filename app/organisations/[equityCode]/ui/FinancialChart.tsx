import { FinancialSummary } from "@/lib/types/j-quants";
import { useMemo } from "react";

export default function FinancialChart({ data }: { data: FinancialSummary[] }) {
  // Recharts requires chronological order (oldest to newest) to display lines left-to-right correctly
  const chartData = useMemo(() => { })
}