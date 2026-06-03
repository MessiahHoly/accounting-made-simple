import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemFooter,
  ItemTitle,
} from "@/components/ui/item"
import { Equity } from "@/lib/types/j-quants"
import Link from "next/link"

export function Organisation({ equity, region, source, language }: {
// export function Organisation({ equity, exchangeFullName, source, language }: {
  equity: Equity, region: string, source: 'j-quants' | 'alpha-vantage', language?: string
  // equity: Equity, exchangeFullName: string, source: 'j-quants' | 'fmp', language?: string
}) {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>{equity.CoName}</ItemTitle>
          <ItemDescription>
            {equity.Code} - {equity.CoNameEn}
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm" asChild>
            <Link
              href={`/organisations/${equity.Code}?source=${source}${language ? `&language=${language}` : ''}`} className="no-underline">
              Open
            </Link>
          </Button>
        </ItemActions>
        <ItemFooter>{region}</ItemFooter>
      </Item>
    </div>
  )
}
