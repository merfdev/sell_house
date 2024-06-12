import BuyResidentialsPage from "@/components/template/BuyResidentialsPage";

async function BuyResidentials({ searchParams }) {
  const res = await fetch("http://localhost:3000/api/profile", {
    cache: "no-store",
  });
  console.log(searchParams);
  const data = await res.json();
  if (data.error) return <h3>مشکلی پیش آمده</h3>;
  let fData = data.data;

  if (searchParams.category) {
    fData = fData.filter((i) => i.category === searchParams.category);
  }

  return <BuyResidentialsPage fdata={fData} />;
}

export default BuyResidentials;
