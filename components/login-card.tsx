"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

export function LoginCard() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (!res?.ok) {
      setError("Invalid email or password");
      setLoading(false);
      return;
    }

    router.push("/");
    router.refresh();
  }

  async function onGoogle() {
    try {
      setLoading(true);
      setError(null);
      const data = await signIn("google", { callbackUrl: "/" });
      console.log(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  async function onGithub() {
    try {
      setLoading(true);
      setError(null);
      await signIn("github", { callbackUrl: "/" });
    } catch {
      setLoading(false);
    }
  }

  return (
    <Card className="w-full max-w-md rounded-3xl backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border border-white/20 dark:border-gray-700/40 shadow-[0_20px_60px_-15px_rgba(124,58,237,0.4)] transition-all duration-500">
      <CardHeader className="text-center py-8 space-y-3">
        <div className="flex justify-center">{/* <Logo /> */}</div>

        <CardTitle className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Welcome Back
        </CardTitle>

        <CardDescription className="text-gray-600 dark:text-gray-400">Please login</CardDescription>
      </CardHeader>

      <CardContent className="px-8 pb-6">
        <form onSubmit={onSubmit} className="flex flex-col gap-6">
          {/* EMAIL */}
          <div className="space-y-2">
            <Label className="text-sm text-gray-600 dark:text-gray-300">Email</Label>
            <Input
              type="email"
              placeholder="admin@gmail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 rounded-xl bg-white/60 dark:bg-gray-800/60 border border-gray-300/60 dark:border-gray-600/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/40 transition-all duration-300 shadow-sm hover:shadow-md"
            />
          </div>

          {/* PASSWORD */}
          <div className="space-y-2">
            <Label className="text-sm text-gray-600 dark:text-gray-300">Password</Label>
            <Input
              type="password"
              required
              value={password}
              placeholder="123456"
              onChange={(e) => setPassword(e.target.value)}
              className="h-12 rounded-xl bg-white/60 dark:bg-gray-800/60 border border-gray-300/60 dark:border-gray-600/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/40 transition-all duration-300 shadow-sm hover:shadow-md"
            />
            <div className="flex justify-end items-center">
              <a href="#" className="text-xs text-gray-400 hover:underline">
                Forget Password
              </a>
            </div>
          </div>

          {error && <p className="text-sm text-red-500 animate-pulse">{error}</p>}

          <Button
            type="submit"
            disabled={loading}
            className="h-12 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 text-white font-semibold shadow-lg shadow-purple-500/30 transition-all duration-300 cursor-pointer"
          >
            {loading ? "loggingIn..." : "Login"}
          </Button>
        </form>
        <div className="flex items-end justify-end mt-5">
          <p>Don't have an account?</p>
          <a href="/signup" className="text-blue-400  underline">
            Sign Up
          </a>
        </div>
      </CardContent>

      <CardFooter className="flex-col px-8 pb-8 gap-4">
        <div className="relative w-full text-center text-xs text-gray-400">
          <span className="bg-white dark:bg-gray-900 px-2 relative z-10">or Continue With</span>
          <div className="absolute left-0 top-1/2 w-full border-t border-gray-300 dark:border-gray-700 -z-0" />
        </div>

        <Button
          variant="outline"
          onClick={onGoogle}
          disabled={loading}
          className="h-12 w-full rounded-xl bg-white/60 dark:bg-gray-800/60 border border-gray-300/60 dark:border-gray-600/60 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
        >
          <FcGoogle size={20} />
          continueWithGoogle
        </Button>

        <Button
          variant="outline"
          onClick={onGithub}
          disabled={loading}
          className="h-12 w-full rounded-xl bg-white/60 dark:bg-gray-800/60 border border-gray-300/60 dark:border-gray-600/60 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
        >
          <FaGithub size={20} />
          continueWithGithub
        </Button>
      </CardFooter>
    </Card>
  );
}
