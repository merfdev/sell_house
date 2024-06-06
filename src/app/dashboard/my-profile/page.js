import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import MyProfilePage from "@/components/template/MyProfilePage";
import User from "@/models/Users";
import connectDB from "@/utils/connectDB";
import { getServerSession } from "next-auth";

async function MyProfile() {
  await connectDB();
  const session = await getServerSession(authOptions);
  const [user] = await User.aggregate([
    { $match: { email: session.user.email } },
    {
      $lookup: {
        from: "profiles",
        localField: "_id",
        foreignField: "userId",
        as: "profile",
      },
    },
  ]);
  console.log(user.profile);
  return <MyProfilePage profiles={user.profile} />;
}

export default MyProfile;
