import { sanityClient, urlFor } from "@/service/sanity";
import { SanityRecommendInfo } from "@/model/recommendPlace";

export default class RecommendPlaceSanity {
  static getRecommendPlaceListByEmail = async (
    email: string,
  ): Promise<SanityRecommendInfo> => {
    const res = await sanityClient.fetch<SanityRecommendInfo>(
      `
    *[_type == "recommendPlace" && user->email == "${email}"][0]{
      _id,
      _type,
      places[]{
        ...,
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
      }
    }`,
    );

    return {
      ...res,
      places: res.places.map((info) => ({
        ...info,
        place: {
          ...info.place,
          image: urlFor(info.place.image).url(),
        },
      })),
    };
  };

  static patchStar = async (
    docId: string,
    _key: string,
    status: boolean,
  ): Promise<boolean> => {
    const patchData = {
      [`places[_key==\"${_key}\"].star`]: status,
    };

    // 'places[_key=="b66aee6336db"].star': true,

    return await sanityClient
      .patch(docId)
      .set(patchData)
      .commit()
      .then((response) => {
        return true;
      })
      .catch((error) => {
        console.log(error);
        return false;
      });
  };
}
