"use client"
import { Button } from "@/components/ui/button"
import { useAppDispatch } from "@/lib/hooks/redux.hook"
import { setIsOpenSearch } from "@/store/slices/toggle.slice"
import { Search } from "lucide-react"

export default function SearchAction() {
  const dispatch = useAppDispatch()

  return (
    <>
      <Button
        variant="outline"
        size="icon"
        onClick={() => dispatch(setIsOpenSearch(true))}
      >
        <Search />
      </Button>
    </>
  )
}
