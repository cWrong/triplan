import { sanityClient, urlFor } from "@/service/sanity";
import { EngDetailPlace, Place, getPlaceId, placeType } from "@/model/place";

export const addPlace = async (place: EngDetailPlace) => {
  const newPlace = {
    _id: getPlaceId(place.id),
    _type: "place",
    ...place,
  };

  await sanityClient.createIfNotExists(newPlace);
};

export const getPlace = async (placeId: number): Promise<Place> => {
  const {
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
    description,
  } = await sanityClient.fetch<Place>(
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
    id,
    path,
    name,
    country,
    city,
    province,
    type,
    address,
    phoneNumber,
    image: urlFor(image).url(),
    description,
  };
};
