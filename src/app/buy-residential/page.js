import BuyResidentialsPage from "@/components/template/BuyResidentialsPage";
import Profile from "@/models/Profile";
import connectDB from "@/utils/connectDB";

async function BuyResidentials({ searchParams }) {
  await connectDB();
  let fData = await Profile.find({});
  if (searchParams.category) {
    fData = await Profile.find({ category: searchParams.category });
  }

  // const data = await res.json();
  // if (data.error) return <h3>مشکلی پیش آمده</h3>;
  // let fData = data.data;

  // if (searchParams.category) {
  //   fData = fData.filter((i) => i.category === searchParams.category);
  // }

  return <BuyResidentialsPage fdata={fData} />;
}

export default BuyResidentials;
