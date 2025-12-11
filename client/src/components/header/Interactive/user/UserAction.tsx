
import { DropdownMenu, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

import UserBtn from "./UserBtn"
import UserDropdown from "./UserDropdown"

export default function UserAction() {

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <UserBtn />
        </DropdownMenuTrigger>
        <UserDropdown />
      </DropdownMenu>
    </>
  )
}
