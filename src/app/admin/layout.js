import DashboardSidebar from "@/components/layout/DashboardSidebar";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import User from "@/models/Users";
import { redirect } from "next/navigation";
import connectDB from "@/utils/connectDB";

async function AdminLayout({ children }) {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");
  await connectDB();
  const user = await User.findOne({ email: session.user.email });

  return (
    <DashboardSidebar role={user.role} email={user.email}>
      {children}
    </DashboardSidebar>
  );
}

export default AdminLayout;
