// Login.tsx or Signup.tsx (same for both)
import AuthForm from "@/components/Auth/AuthForm";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const Login = () => {
  return (
    <main className="min-h-[calc(100vh-64px)] w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-background">
      <div className="w-full max-w-[480px]">
        <Card className="w-full rounded-2xl shadow-lg border border-white/10 backdrop-blur-sm bg-black/50 dark:bg-white/5">
          <CardHeader className="mb-2">
            <CardTitle className="text-center text-3xl">Login</CardTitle>
          </CardHeader>
          <AuthForm type="login" />
        </Card>
      </div>
    </main>
  );
};

export default Login;
