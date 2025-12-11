import { DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { UserActionType } from "@/lib/types/user.type"
import Link from "next/link"

export default function UserItem({ props }: { props: UserActionType }) {

  const { title, url } = props

  return (
    <>
      <DropdownMenuItem>
        <Link href={url} className="size-full flex items-center gap-2 font-semibold">
          <props.icon />
          <span>{title}</span>
        </Link>
      </DropdownMenuItem>
    </>
  )
}
