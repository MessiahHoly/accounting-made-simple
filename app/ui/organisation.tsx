import { Button } from "@/components/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/components/ui/item"
import { Equity } from "@/lib/types/j-quants"
import Link from "next/link"

export function Organisation({ equity }: { equity: Equity }) {
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
            <Link href={`/organisations/${equity.Code}`} className="no-underline">
              Open
            </Link>
          </Button>
        </ItemActions>
      </Item>
    </div>
  )
}
