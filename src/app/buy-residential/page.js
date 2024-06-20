import BuyResidentialsPage from "@/components/template/BuyResidentialsPage";
import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";

async function BuyResidentials({ searchParams }) {
  await connectDB();
  const profile = await Profile.find({ category: searchParams.category });
  console.log(profile);

  // const data = await res.json();
  // if (data.error) return <h3>مشکلی پیش آمده</h3>;
  // let fData = data.data;

  // if (searchParams.category) {
  //   fData = fData.filter((i) => i.category === searchParams.category);
  // }

  return <BuyResidentialsPage fdata={profile} />;
}

export default BuyResidentials;
