import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const cookieStore = await cookies();
    const requesterEmail = cookieStore.get("session_email")?.value;

    if (!requesterEmail) {
      return NextResponse.json({ message: "Missing requester email" }, { status: 401 });
    }

    const requester = await prisma.user.findUnique({
      where: { email: requesterEmail },
      select: { isAnAdmin: true },
    });

    if (!requester?.isAnAdmin) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 403 });
    }

    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        isAnAdmin: true,
      },
      orderBy: { id: "asc" },
    });

    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    console.error("Admin users fetch error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
