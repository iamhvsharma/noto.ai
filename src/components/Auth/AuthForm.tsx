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
import { loginAction, signupAction } from "@/actions/users";

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
        toastContent = "You have successfully logged in.";
      } else {
        errorMessage = (await signupAction(email, password)).errorMessage;
        toastContent = "Check your email for confirmation link";
      }

      if (errorMessage) {
        toast.error(errorMessage);
      } else {
        toast.success(toastContent);
        router.replace("/");
      }
    });
  };

  return (
    <form action={handleSubmit}>
      <CardContent className="space-y-4 sm:space-y-5 px-4 sm:px-6 pt-2 pb-0">
        <div className="flex flex-col space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="Enter your email"
            type="email"
            required
            disabled={isPending}
            className="w-full"
          />
        </div>
        <div className="flex flex-col space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            placeholder="Enter your password"
            type="password"
            required
            disabled={isPending}
            className="w-full"
          />
        </div>
      </CardContent>
      <CardFooter className="mt-4 flex flex-col gap-4 sm:gap-5 px-4 sm:px-6 pb-6">
        <Button className="w-full" disabled={isPending}>
          {isPending ? (
            <Loader2 className="animate-spin h-4 w-4" />
          ) : isLoginForm ? (
            "Login"
          ) : (
            "Signup"
          )}
        </Button>
        <p className="text-center text-sm">
          {isLoginForm
            ? "Don't have an account yet?"
            : "Already have an account?"}{" "}
          <Link
            href={isLoginForm ? "/signup" : "/login"}
            className={`text-blue-500 underline transition-opacity ${
              isPending ? "pointer-events-none opacity-50" : ""
            }`}
          >
            {isLoginForm ? "Signup" : "Login"}
          </Link>
        </p>
      </CardFooter>
    </form>
  );
};

export default AuthForm;
