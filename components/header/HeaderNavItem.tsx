"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Props = {
  href: string
  label: string
  isActive?: boolean
}

const HeaderNavItem = (props: Props) => {
  const { isActive, href, label } = props

  return (
    <Button
      asChild
      variant="outline"
      size={"sm"}
      className={cn(
        "w-full lg:w-auto justify-between font-normal hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition",
        isActive ? "bg-white/10 text-white" : " bg-transparent"
      )}
    >
      <Link href={href}>{label}</Link>
    </Button>
  )
}
export default HeaderNavItem
