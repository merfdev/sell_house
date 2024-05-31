import SigninPage from "@/components/template/SigninPage";
import { getServerSession } from "next-auth";

import { redirect } from "next/navigation";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";

async function SignIn() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/");

  return <SigninPage />;
}

export default SignIn;
