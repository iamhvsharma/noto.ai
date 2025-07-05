// Signup.tsx or Signup.tsx (same for both)
import AuthForm from "@/components/Auth/AuthForm";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const Signup = () => {
  return (
    <main className="min-h-[calc(100vh-64px)] w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-background">
      <div className="w-full max-w-[480px]">
        <Card className="w-full rounded-2xl shadow-xl border border-white/10 backdrop-blur-sm bg-white/10 dark:bg-white/5">
          <CardHeader className="mb-2">
            <CardTitle className="text-center text-3xl">Signup</CardTitle>
          </CardHeader>
          <AuthForm type="signup" />
        </Card>
      </div>
    </main>
  );
};

export default Signup;
