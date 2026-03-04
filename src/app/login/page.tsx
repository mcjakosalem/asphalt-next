"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import FadeIn from "@/components/FadeIn";
const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Invalid credentials");
      }
      if (typeof window !== 'undefined') localStorage.setItem("token", data.token);
      const resolvedName = data.name || data.userName;
      if (resolvedName) {
        if (typeof window !== 'undefined') localStorage.setItem("userName", resolvedName);
      }
      router.push("/");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Failed to login");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-[#1B1B1B] font-sans flex flex-col">
      {" "}
      <Navbar />{" "}
      <div className="grow flex items-center justify-center px-6 py-12">
        {" "}
        <FadeIn direction="up" className="w-full max-w-md">
          {" "}
          <div className="bg-white w-full rounded-3xl shadow-2xl p-10 transform transition-all hover:scale-[1.01]">
            {" "}
            <div className="text-center mb-10">
              {" "}
              <h1 className="text-4xl font-black italic uppercase tracking-tighter text-black mb-2">
                Welcome Back
              </h1>{" "}
              <p className="text-gray-500 font-medium">
                Sign in to continue to Asphalt
              </p>{" "}
            </div>{" "}
            {error && (
              <div className="bg-red-100 text-red-600 p-4 rounded-xl mb-6 text-sm font-semibold text-center">
                {" "}
                {error}{" "}
              </div>
            )}{" "}
            <form onSubmit={handleSubmit} className="space-y-6">
              {" "}
              <div>
                {" "}
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                  Email Address
                </label>{" "}
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-5 py-4 bg-gray-100 border-transparent rounded-2xl text-black focus:bg-white focus:border-black focus:ring-2 focus:ring-black transition-all outline-none"
                  placeholder="Enter your email"
                  required
                />{" "}
              </div>{" "}
              <div>
                {" "}
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                  Password
                </label>{" "}
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-5 py-4 bg-gray-100 border-transparent rounded-2xl text-black focus:bg-white focus:border-black focus:ring-2 focus:ring-black transition-all outline-none"
                  placeholder="Enter your password"
                  required
                />{" "}
              </div>{" "}
              <div className="flex items-center justify-between text-sm">
                {" "}
                <label className="flex items-center text-gray-600 cursor-pointer">
                  {" "}
                  <input
                    type="checkbox"
                    className="mr-2 rounded border-gray-300 text-black focus:ring-black"
                  />{" "}
                  <span className="font-medium">Remember me</span>{" "}
                </label>{" "}
                <a href="#" className="font-bold text-black hover:underline">
                  Forgot Password?
                </a>{" "}
              </div>{" "}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-gray-800 hover:-translate-y-1 transition-all shadow-lg disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {" "}
                {loading ? "Signing In..." : "Sign In"}{" "}
              </button>{" "}
            </form>{" "}
            <p className="text-center mt-8 text-gray-600 font-medium">
              {" "}
              Don't have an account?{" "}
              <Link
                href="/register"
                className="text-black font-bold hover:underline"
              >
                {" "}
                Sign Up{" "}
              </Link>{" "}
            </p>{" "}
          </div>{" "}
        </FadeIn>{" "}
      </div>{" "}
    </div>
  );
};
export default Login;





