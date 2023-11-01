import { sanityClient, urlFor } from "@/service/sanity";
import { EngDetailPlace, Place, getPlaceId, placeType } from "@/model/place";

export default class PlaceSanity {
  static addPlace = async (place: EngDetailPlace) => {
    const newPlace = {
      _id: getPlaceId(place.id),
      _type: "place",
      ...place,
    };

    await sanityClient.createIfNotExists(newPlace);
  };

  static getPlace = async (placeId: number): Promise<Place> => {
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
}
