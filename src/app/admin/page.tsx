import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import prisma from "@/lib/prisma";

type AdminUser = {
  id: number;
  name: string;
  email: string;
  isAnAdmin: boolean;
};

export default async function AdminPage() {
  const cookieStore = await cookies();
  const sessionEmail = cookieStore.get("session_email")?.value;

  if (!sessionEmail) {
    redirect("/login");
  }

  const requester = (await prisma.user.findUnique({
    where: { email: sessionEmail },
    select: { isAnAdmin: true } as never,
  })) as { isAnAdmin: boolean } | null;

  if (!requester?.isAnAdmin) {
    redirect("/");
  }

  const users = (await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      isAnAdmin: true,
    },
    orderBy: { id: "asc" },
  })) as AdminUser[];

  return (
    <div className="min-h-screen bg-[#1B1B1B] text-white">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 pt-40 pb-12">
        <h1 className="text-4xl font-black italic uppercase tracking-tight mb-6">Admin Dashboard</h1>
        <p className="text-gray-300 mb-10">All registered users are listed below.</p>

        <div className="overflow-x-auto rounded-2xl border border-gray-700 bg-[#111111]">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-700 text-gray-300 uppercase text-sm tracking-wide">
                <th className="px-4 py-4">ID</th>
                <th className="px-4 py-4">Name</th>
                <th className="px-4 py-4">Email</th>
                <th className="px-4 py-4">Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-gray-800 hover:bg-[#1a1a1a]">
                  <td className="px-4 py-4">{user.id}</td>
                  <td className="px-4 py-4">{user.name}</td>
                  <td className="px-4 py-4">{user.email}</td>
                  <td className="px-4 py-4 font-semibold">
                    {user.isAnAdmin ? "Admin" : "User"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
