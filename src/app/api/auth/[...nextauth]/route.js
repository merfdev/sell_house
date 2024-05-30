import User from "@/models/Users";
import { verifyPassword } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { email, password } = credentials;
        try {
          await connectDB();
        } catch (error) {
          throw new Error("could not connect to database");
        }
        if (!email || !password) {
          throw new Error("email and password are required");
        }
        const user = await User.findOne({ email });
        if (!user) {
          throw new Error("invalid email or password");
        }
        const isMatch = await verifyPassword(password, user.password);
        if (!isMatch) {
          throw new Error("incorrect email or password");
        }
        return { email };
      },
    }),
  ],
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
