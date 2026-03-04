"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import FadeIn from "@/components/FadeIn";
const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }
      router.push("/login");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Failed to register");
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
        <FadeIn direction="up" className="w-full max-w-lg">
          {" "}
          <div className="bg-white w-full rounded-3xl shadow-2xl p-10 transform transition-all hover:scale-[1.01]">
            {" "}
            <div className="text-center mb-10">
              {" "}
              <h1 className="text-4xl font-black italic uppercase tracking-tighter text-black mb-2">
                Create Account
              </h1>{" "}
              <p className="text-gray-500 font-medium">
                Join Asphalt and start your journey
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
                  Full Name
                </label>{" "}
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-5 py-4 bg-gray-100 border-transparent rounded-2xl text-black focus:bg-white focus:border-black focus:ring-2 focus:ring-black transition-all outline-none"
                  placeholder="Enter your full name"
                  required
                />{" "}
              </div>{" "}
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {" "}
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
                    placeholder="Create password"
                    required
                  />{" "}
                </div>{" "}
                <div>
                  {" "}
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">
                    Confirm
                  </label>{" "}
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full px-5 py-4 bg-gray-100 border-transparent rounded-2xl text-black focus:bg-white focus:border-black focus:ring-2 focus:ring-black transition-all outline-none"
                    placeholder="Confirm password"
                    required
                  />{" "}
                </div>{" "}
              </div>{" "}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-black text-white py-4 rounded-2xl font-bold uppercase tracking-widest hover:bg-gray-800 hover:-translate-y-1 transition-all shadow-lg disabled:opacity-70 disabled:hover:translate-y-0 mt-4"
              >
                {" "}
                {loading ? "Creating Account..." : "Sign Up"}{" "}
              </button>{" "}
            </form>{" "}
            <p className="text-center mt-8 text-gray-600 font-medium">
              {" "}
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-black font-bold hover:underline"
              >
                {" "}
                Sign In{" "}
              </Link>{" "}
            </p>{" "}
          </div>{" "}
        </FadeIn>{" "}
      </div>{" "}
    </div>
  );
};
export default Register;





