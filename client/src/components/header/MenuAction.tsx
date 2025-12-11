"use client"
import { AlignLeft } from "lucide-react"
import { Button } from "../ui/button"
import { useAppDispatch } from "@/lib/hooks/redux.hook"
import { setIsOpenMenu } from "@/store/slices/toggle.slice"

export default function MenuAction() {
  const dispatch = useAppDispatch()
  return (
    <>
      <Button
        data-menu-button
        variant="outline"
        size="icon"
        onClick={() => dispatch(setIsOpenMenu(true))}
        className="md:hidden"
      >
        <AlignLeft />
      </Button>
    </>
  )
}
