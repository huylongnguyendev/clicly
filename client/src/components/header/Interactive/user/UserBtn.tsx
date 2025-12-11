import { Button } from "@/components/ui/button"
import { UserRound } from "lucide-react"

export default function UserBtn() {
  return (
    <>
      <Button
        variant="outline"
        size="icon"
      >
        <UserRound />
      </Button>
    </>
  )
}
