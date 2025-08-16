import Image from "next/image"
import { ClerkLoaded, ClerkLoading, SignIn } from "@clerk/nextjs"
import { Loader2 } from "lucide-react"

const SignInPage = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-6">
          <h1 className="font-bold text-3xl">Welcome Back</h1>
          <p className="text-base">Log in or Create account</p>
        </div>
        <div className="flex items-center justify-center mt-8">
          <ClerkLoaded>
            <SignIn path="/sign-in" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin text-muted-foreground" />
          </ClerkLoading>
        </div>
      </div>

      <div className="h-full bg-blue-600 hidden lg:flex flex-col items-center justify-center">
        <Image src={"/logo-white.svg"} alt="logo" width={100} height={100} />
      </div>
    </div>
  )
}

export default SignInPage
