"use client"

import { DropdownMenuContent } from "@/components/ui/dropdown-menu"
import { useAppSelector } from "@/lib/hooks/redux.hook"
import { UserLoggedAction, UserOutAction } from "@/lib/data/interactive.data"
import { UserActionType } from "@/lib/types/user.type"
import UserItem from "./UserItem"

export default function UserDropdown() {
  const user = useAppSelector((state) => state.login.user)
  const actionLogged: UserActionType[] = UserLoggedAction
  const actionOut: UserActionType[] = UserOutAction
  return (
    <>
      {
        user && (
          <DropdownMenuContent>
            {
              actionLogged.map(item => (
                <UserItem key={item.title} props={item} />
              ))
            }
          </DropdownMenuContent>
        )
        || (
          <DropdownMenuContent>
            {
              actionOut.map(item => (
                <UserItem key={item.title} props={item} />
              ))
            }
          </DropdownMenuContent>
        )
      }
    </>
  )
}
