import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import PlaceCard from "@/components/common/PlaceCard";
import RecommendPlaceSanity from "@/service/recommend-place/recommendPlace";

export default async function MyPlaceList() {
  const session = await getServerSession();
  if (!session) {
    redirect("/auth/signin");
  }
  const { user } = session;

  const placeList = await RecommendPlaceSanity.getRecommendPlaceListByEmail(
    user.email,
  );

  return (
    <div>
      {placeList.places.map((place) => (
        <PlaceCard key={place._key} docId={placeList._id} place={place} />
      ))}
    </div>
  );
}
