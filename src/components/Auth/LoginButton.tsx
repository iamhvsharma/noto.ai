"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const LoginButton = () => {
  const router = useRouter();

  const handleLogin = async () => {
    router.push("/login");
  };

  return (
    <Button variant="outline" onClick={handleLogin} className="w-full md:w-24 lg:w:24">
      Login
    </Button>
  );
};

export default LoginButton;
