import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { getRecommendPlaceListByEmail } from "@/service/place/place";
import PlaceCard from "@/components/common/PlaceCard";

export default async function MyPlaceList() {
  const session = await getServerSession();
  if (!session) {
    redirect("/auth/signin");
  }
  const { user } = session;

  console.log(user);

  const placeList = await getRecommendPlaceListByEmail(user.email);
  console.log(placeList);

  return (
    <div>
      {placeList.map((place) => (
        <PlaceCard place={place} />
      ))}
    </div>
  );
}
