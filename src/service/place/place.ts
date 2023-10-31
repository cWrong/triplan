import { sanityClient, urlFor } from "@/service/sanity";
import { EngDetailPlace, Place, getPlaceId, placeType } from "@/model/place";
import {
  RecommendInfo,
  RecommendPlace,
  recommendPlaceType,
} from "@/model/recommendPlace";
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

export const getRecommendPlaceListByEmail = async (
  email: string,
): Promise<RecommendPlace[]> => {
  const res = await sanityClient.fetch<RecommendPlace[]>(
    `
    *[_type == "recommendPlace"]{
      ...,
      "user": *[
        _type == "user" && 
        email == "sjy0175@gmail.com" && 
        recommendPlace._ref == ^._id
      ]
    }.places[]{
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
