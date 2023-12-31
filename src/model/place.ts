export type Place = {
  id: number;
  path: string;
  name: string;
  country: string;
  city: string | undefined;
  province: string;
  type: string[];
  address: string;
  phoneNumber: string | undefined;
  image: string;
  description: string | undefined;
};

export type DetailPlace = Place & {
  density: number | undefined;
  reviewScore: number | undefined;
  reviewCount: number | undefined;
  recommendTime: string | undefined;
  price: string | undefined;
};

export type EngDetailPlace = DetailPlace & {
  name_jp: string;
  type_eng: string[];
  description_eng: string | undefined;
};

export type PlaceImage = Pick<Place, "id" | "name" | "image">;

export const getPlaceId = (id: number) => {
  return `${placeType}.${id}`;
};

export const placeType = "place";
