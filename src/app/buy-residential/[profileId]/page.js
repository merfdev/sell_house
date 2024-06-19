import DetailsPage from "@/components/template/DetailsPage";
import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";

async function ProfileDetails({ params: { profileId } }) {
  await connectDB();
  const profile = await Profile.findOne({ _id: profileId });
  console.log(profile);
  if (!profile) {
    return <h3>مشکلی پیش آمده لطفا دوباره امتحان کنید</h3>;
  }
  return <DetailsPage data={JSON.parse(JSON.stringify(profile))} />;
}

export default ProfileDetails;
