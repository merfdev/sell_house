import SignUpPage from "@/components/template/SignUpPage";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

async function SignUp() {
  const session = await getServerSession(authOptions);
  if (session) redirect("/");
  return <SignUpPage />;
}

export default SignUp;
