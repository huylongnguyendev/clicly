import Link from "next/link"

export default function Logo({ className }: { className?: string }) {
  return (
    <>
      <div className={`logo font-pacifico-logo ${className}`}>
        <Link href="/" className="text-3xl md:text-4xl font-semibold">
          <span className="text-primary">C</span><span>licly</span>
        </Link>
      </div>
    </>
  )
}
