"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import logo from "@/assets/logo.png";
const Navbar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [userName, setUserName] = useState<string | null>(() => {
    const token = (typeof window !== 'undefined' ? localStorage.getItem("token") : null);
    const storedName = (typeof window !== 'undefined' ? localStorage.getItem("userName") : null);
    return token && storedName ? storedName : null;
  });
  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } catch {
      // Ignore network failures and still clear local state.
    }

    if (typeof window !== 'undefined') localStorage.removeItem("token");
    if (typeof window !== 'undefined') localStorage.removeItem("userName");
    if (typeof window !== 'undefined') localStorage.removeItem("isAnAdmin");
    if (typeof window !== 'undefined') localStorage.removeItem("userEmail");
    setUserName(null);
    router.push("/");
  };

  const handleSectionClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) => {
    if (pathname !== "/") {
      return;
    }

    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", `/#${sectionId}`);
    }
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname !== "/") {
      return;
    }

    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.replaceState(null, "", "/");
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 flex items-center justify-between px-8 py-2 bg-white border border-gray-200 rounded-2xl shadow-lg">
      {" "}
      <div className="relative w-40 h-full flex items-center">
        {" "}
        <Link href="/">
          {" "}
          <img
            src={logo.src}
            alt="Asphalt Logo"
            className="absolute left-0 top-1/2 -translate-y-1/2 h-24 w-auto min-w-37.5 object-contain z-50 drop-shadow-md cursor-pointer"
          />{" "}
        </Link>{" "}
      </div>{" "}
      <ul className="hidden md:flex gap-10 text-sm font-medium text-black">
        {" "}
        <li className="hover:text-gray-600 cursor-pointer transition">
          <Link href="/" onClick={handleHomeClick}>Home</Link>
        </li>{" "}
        <li className="hover:text-gray-600 cursor-pointer transition">
          <Link href="/#car-rentals" onClick={(e) => handleSectionClick(e, "car-rentals")}>Car Rentals</Link>
        </li>{" "}
        <li className="hover:text-gray-600 cursor-pointer transition">
          <Link href="/#shop-cars" onClick={(e) => handleSectionClick(e, "shop-cars")}>Shop Cars</Link>
        </li>{" "}
        <li className="hover:text-gray-600 cursor-pointer transition">
          <Link href="/#featured" onClick={(e) => handleSectionClick(e, "featured")}>Featured</Link>
        </li>{" "}
      </ul>{" "}
      <div className="flex items-center gap-4">
        {" "}
        {userName ? (
          <>
            {" "}
            <span className="text-sm font-bold text-black">
              Hello, {userName}
            </span>{" "}
            <button
              onClick={handleLogout}
              className="bg-orange-400 hover:bg-orange-500 px-7 py-2 rounded-lg text-sm font-bold text-white transition cursor-pointer"
            >
              {" "}
              Log Out{" "}
            </button>{" "}
          </>
        ) : (
          <Link href="/login">
            {" "}
            <button className="bg-[#4a4a4a] hover:bg-[#5a5a5a] px-7 py-2 rounded-lg text-sm font-bold text-white transition cursor-pointer">
              {" "}
              Sign In{" "}
            </button>{" "}
          </Link>
        )}{" "}
      </div>{" "}
    </nav>
  );
};
export default Navbar;





