import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();
    const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
    const isAnAdmin = adminEmail ? email.trim().toLowerCase() === adminEmail : false;

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 },
      );
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "Error: Email is already in use!" },
        { status: 400 },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        isAnAdmin,
      } as {
        name: string;
        email: string;
        password: string;
        isAnAdmin: boolean;
      },
    });

    return NextResponse.json(
      {
        token: "dummy-jwt-token",
        message: "User registered successfully!",
        name: user.name,
        userName: user.name,
        isAnAdmin,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
