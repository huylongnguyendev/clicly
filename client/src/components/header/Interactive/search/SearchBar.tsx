"use client"

import { Button } from "@/components/ui/button"
import SearchInput from "./SearchInput"
import { X } from "lucide-react"
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux.hook"
import { setIsOpenSearch } from "@/store/slices/toggle.slice"
import { cn } from "@/lib/utils"

export default function SearchBar() {
  const isOpenSearch = useAppSelector((state) => state.toggle.isOpenSearch)
  const dispatch = useAppDispatch()

  return (
    <>
      <div className={cn("absolute bg-background/80 drop-shadow-2xl -top-[1000px] left-1/2 -translate-x-1/2 w-full h-dvh z-50 transition-all duration-300", isOpenSearch && "top-0")}>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-1/5 top-20"
          onClick={() => dispatch(setIsOpenSearch(false))}
        >
          <X className="text-destructive" />
        </Button>
        <SearchInput />
      </div>
    </>
  )
}
