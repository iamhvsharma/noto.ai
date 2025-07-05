"use client"

import React, { useState } from "react";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const LoginButton = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  const handleLogin = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const errorMessage = "error";

    if (!errorMessage) {
      toast.success("You have been successfully logged in");
      router.push("/dashboard")
    } else {
        toast.error("Login failed, try again later.")
    }

    setLoading(false);
  };

  return (
    <Button
      variant="outline"
      onClick={handleLogin}
      disabled={loading}
      className="w-24"
    >
      {loading ? <Loader2 className="animate-spin" /> : "Login"}
    </Button>
  );
};

export default LoginButton;
