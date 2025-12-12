import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import SearchItem from "./SearchItem"

export default function SearchInput() {
  return (
    <>
      <div className="relative w-full max-w-4xl top-1/2 left-1/2 -translate-1/2">
        <Input
          type="text"
          placeholder="Tìm kiếm..."
          className="bg-secondary pr-10"
        />
        <Button
          size="icon"
          className="absolute right-0"
        >
          <Search />
        </Button>
        <ul className="mt-4 shadow-md rounded-md p-4">
          <SearchItem />
        </ul>
      </div>
    </>
  )
}
