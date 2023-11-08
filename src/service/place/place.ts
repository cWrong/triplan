import { sanityClient, urlFor } from "@/service/sanity";
import {
  EngDetailPlace,
  Place,
  getPlaceId,
  placeType,
  PlaceImage,
} from "@/model/place";

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

  static getPlaceImage = async (placeId: number): Promise<PlaceImage> => {
    const res = await sanityClient.fetch<PlaceImage>(
      `
    *[_type == "${placeType}" && id == ${placeId}][0]
    {
      id,
      name,
      image
    }`,
    );

    return {
      ...res,
      image: urlFor(res.image).url(),
    };
  };
}
