"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const SignupButton = () => {
  const router = useRouter();

  function handleSignup() {
    router.push("/signup");
  }

  return (
    <Button variant="outline" onClick={handleSignup} className="w-full md:w-24 lg:w:24">
      Signup
    </Button>
  );
};

export default SignupButton;
