import { NavItemType } from "@/lib/types/header.type"
import { cn } from "@/lib/utils"
import Link from "next/link"

type Props = NavItemType

export default function NavItem({ props }: { props: Props }) {
  const { title, url } = props
  return (
    <>
      <li
        className={cn("relative capitalize max-md:px-3 max-md:py-1 rounded-md py-0.5 transition-all duration-300 group active:bg-accent",
          title === "sale" && "text-red-500")}>
        <Link
          href={url}
          className="inline-flex size-full items-center"
        >
          <p className="transition-colors duration-300 group-hover:text-primary">
            {title}
          </p>
        </Link>
        <span className="absolute h-0.5 w-0 bg-primary left-1/2 bottom-0 transition-all duration-300 group-hover:w-1/2" />
        <span className="absolute h-0.5 w-0 bg-primary right-1/2 bottom-0 transition-all duration-300 group-hover:w-1/2" />
      </li>
    </>
  )
}
