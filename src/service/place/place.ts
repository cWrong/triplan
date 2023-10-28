import { sanityClient, urlFor } from "@/service/sanity";
import { EngDetailPlace, Place, getPlaceId, placeType } from "@/model/place";
import { RecommendInfo, recommendPlaceType } from "@/model/recommendPlace";
import { getUserId } from "@/model/user";

export const addPlace = async (place: EngDetailPlace) => {
  const newPlace = {
    _id: getPlaceId(place.id),
    _type: "place",
    ...place,
  };

  await sanityClient.createIfNotExists(newPlace);
};

export const getPlace = async (placeId: number): Promise<Place> => {
  const res = await sanityClient.fetch<Place>(
    `
    *[_type == "${placeType}" && id == ${placeId}][0]
    {
      id,
      path,
      name,
      country,
      city,
      province,
      type,
      address,
      phoneNumber,
      image,
      description
    }`,
  );

  return {
    ...res,
    image: urlFor(res.image).url(),
  };
};

export const getRecommendPlaceList = async (
  userId: number,
): Promise<RecommendInfo[]> => {
  const res = await sanityClient.fetch<RecommendInfo[]>(
    `
    *[_type == "${recommendPlaceType}" && user._ref == '${getUserId(userId)}']
    .places[]{
      fitness,
      star, 
      place->{
        id,
        path,
        name,
        country,
        city,
        province,
        type,
        address,
        phoneNumber,
        image,
        description
      }
    }`,
  );

  return res.map((info) => ({
    ...info,
    place: {
      ...info.place,
      image: urlFor(info.place.image).url(),
    },
  }));
};
