"use client";

import { useRouter } from "next/navigation";
import React, { useTransition } from "react";
import { CardContent, CardFooter } from "../ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

interface Props {
  type: "login" | "signup";
}

const AuthForm = ({ type }: Props) => {
  const [isPending, startTransition] = useTransition();

  const isLoginForm = type === "login";

  const router = useRouter();

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      const email = formData.get("email") as string;
      const password = formData.get("password") as string;

      let errorMessage;
      let toastContent;

      if (isLoginForm) {
        errorMessage = (await loginAction(email, password)).errorMessage;
        toastContent = "You have been successfully logged in";
      } else {
        errorMessage = (await signupAction(email, password)).errorMessage;
        toastContent = "Check your email for confirmation link";
      }

      if (!errorMessage) {
        toast.success(toastContent);
        router.replace("/")
      } else {
        toast.error(toastContent);
      }
    });
  };

  return (
    <form action={handleSubmit}>
      <CardContent className="grid w-full items-center gap-4">
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="Enter your email"
            type="email"
            required
            disabled={isPending}
          />
        </div>
        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            placeholder="Enter your password"
            type="password"
            required
            disabled={isPending}
          />
        </div>
      </CardContent>
      <CardFooter className="mt-4 flex flex-col gap-6">
        <Button className="w-full">
          {isPending ? (
            <Loader2 className="animate-spin" />
          ) : isLoginForm ? (
            "Login"
          ) : (
            "Signup"
          )}
        </Button>
        <p className="text-xs">
          {isLoginForm
            ? "Don't have an account yet?"
            : "Already have an account?"}{" "}
          <Link
            href={isLoginForm ? "/signup" : "/login"}
            className={`text-blue-500 underline ${isPending ? "pointer-events-none opacity-50" : ""}`}
          >
            {isLoginForm ? "Signup" : "Login"}
          </Link>
        </p>
      </CardFooter>
    </form>
  );
};

export default AuthForm;
