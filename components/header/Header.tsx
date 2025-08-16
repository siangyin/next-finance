"use client"

import { ClerkLoaded, ClerkLoading, UserButton, useUser } from "@clerk/nextjs"
import { Loader2 } from "lucide-react"

import HeaderLogo from "@/components/header/HeaderLogo"
import HeaderNav from "@/components/header/HeaderNav"

const Header = () => {
  const { user, isLoaded } = useUser()

  return (
    <header className="bg-gradient-to-b from-blue-700 to-blue-500 px-4 py-8 lg:px-14 pb-36">
      <div className="max-w-screen-2xl mx-auto">
        <div className="w-full flex items-center justify-between mb-14">
          <div className="flex items-center lg:gap-x-16">
            <HeaderLogo />
            <HeaderNav />
          </div>
          <ClerkLoaded>
            <UserButton />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin size-8 text-slate-400" />
          </ClerkLoading>
        </div>
        <div className="space-y-2 mb-4">
          <h2 className="text-2xl lg:text-4xl text-white font-medium ">
            Welcome Back{isLoaded ? ", " : " "}
            {user?.firstName}
          </h2>
          <p className="text-sm lg:text-base text-[#89b6fd]">
            This is Financial Overview Report
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-y-2 lg:gap-y-0 lg:gap-x-2">
          account details
        </div>
      </div>
    </header>
  )
}
export default Header
