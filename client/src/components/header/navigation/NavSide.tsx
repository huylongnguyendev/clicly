"use client"
import { navListData } from "@/lib/data/header.data"
import { NavItemType } from "@/lib/types/header.type"
import NavItem from "./NavItem"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import Link from "next/link"
import { useAppDispatch, useAppSelector } from "@/lib/hooks/redux.hook"
import { cn } from "@/lib/utils"
import { setIsOpenMenu } from "@/store/slices/toggle.slice"
import { useCallback, useEffect, useRef } from "react"

export default function NavSide() {
  const user = useAppSelector((state) => state.login.user)
  const isOpenMenu = useAppSelector((state) => state.toggle.isOpenMenu)
  const dispatch = useAppDispatch()
  const navList: NavItemType[] = navListData
  const ref = useRef<HTMLUListElement>(null)

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node))
      dispatch(setIsOpenMenu(false))
  }, [dispatch])

  useEffect(() => {
    if (!isOpenMenu) return
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [handleClickOutside, isOpenMenu])

  return (
    <>
      <ul
        ref={ref}
        className={cn("absolute top-0 -right-[1000px] bg-background shadow-lg w-11/12 h-dvh flex flex-col gap-4 p-4 transition-all duration-300 md:hidden z-50", isOpenMenu && "right-0")}>
        <li className="ms-auto">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => dispatch(setIsOpenMenu(false))}
          >
            <X className="text-destructive" />
          </Button>
        </li>
        {
          navList.map(nav => (
            <NavItem key={nav.title} props={nav} />
          ))
        }

        {
          !user && (
            <li className="mt-auto space-y-2">
              <Button
                className="w-full"
              >
                <Link href="/register">
                  Đăng ký
                </Link>
              </Button>
              <Button
                variant="secondary"
                className="w-full"
              >
                <Link href="/login">
                  Đăng nhập
                </Link>
              </Button>
            </li>
          )
        }
      </ul>
    </>
  )
}
