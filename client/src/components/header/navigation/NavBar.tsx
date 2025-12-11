import { navListData } from "@/lib/data/header.data"
import type { NavItemType } from "@/lib/types/header.type"
import NavItem from "./NavItem"


export default function NavBar() {

  const navList: NavItemType[] = navListData

  return (
    <>
      <ul className="flex items-center gap-6 font-semibold max-md:absolute -top-[1000px]">
        {
          navList.map(nav => (
            <NavItem key={nav.title} props={nav} />
          ))
        }
      </ul>
    </>
  )
}
