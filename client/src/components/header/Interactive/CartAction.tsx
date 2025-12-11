
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { ShoppingBag } from "lucide-react"

export default function CartAction() {
  return (
    <>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="relative"
          >
            <ShoppingBag />
            <Badge
              variant="destructive"
              className="absolute -top-1.5 -right-1.5 h-5 min-w-5 px-1 tabular-nums"
            >
              10
            </Badge>
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>Giỏ hàng</p>
        </TooltipContent>
      </Tooltip>

    </>
  )
}
