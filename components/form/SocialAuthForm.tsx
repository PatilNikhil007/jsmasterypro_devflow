"use client";

import { Button } from "../ui/button";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { toast } from "sonner";
import ROUTES from "@/constants/routes";

export default function SocialAuthForm() {
  const handleSignIn = async (provider: "github" | "google") => {
    try {
      // Use correct option for next-auth v4: callbackUrl (not redirectTo)
      await signIn(provider, { callbackUrl: ROUTES.HOME });
    } catch (e) {
      console.error(e);
      toast.error("Sign in failed");
    }
  };

  return (
    <div className="mt-10 flex flex-wrap gap-2.5">
      <Button
        type="button"
        variant="outline"
        onClick={() => handleSignIn("github")}
      >
        <Image src="/icons/github.svg" alt="GitHub" width={20} height={20} />
        <span className="ml-2">Login with GitHub</span>
      </Button>

      <Button
        type="button"
        variant="outline"
        onClick={() => handleSignIn("google")}
      >
        <Image src="/icons/google.svg" alt="Google" width={20} height={20} />
        <span className="ml-2">Login with Google</span>
      </Button>
    </div>
  );
}
