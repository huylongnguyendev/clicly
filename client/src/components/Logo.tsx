import { cn } from "@/lib/utils"
import Link from "next/link"

export default function Logo({ className }: { className?: string }) {
  return (
    <>
      <div className={cn("logo font-pacifico-logo text-3xl md:text-4xl", className)}>
        <Link href="/" className=" font-semibold">
          <span className="text-primary">C</span><span>licly</span>
        </Link>
      </div>
    </>
  )
}
