import { sanityClient } from "@/service/sanity";

export type Place = {
  id: number;
  name: string;
  type?: string[];
  density?: number;
  reviewScore?: number;
  reviewCount?: number;
  recommendTime?: string;
  address: string;
  phone?: string;
  price?: number;
  image?: string;
  description?: string;
};

export async function addPlace(place: Place) {
  const newPlace = {
    _id: place.id.toString(),
    _type: "place",
    id: place.id,
    name: place.name,
    type: place.type,
    density: place.density,
    reviewScore: place.reviewScore,
    reviewCount: place.reviewCount,
    recommendTime: place.recommendTime,
    address: place.address,
    phone: place.phone,
    price: place.price,
    image: place.image,
    description: place.description,
  };

  await sanityClient.createIfNotExists(newPlace);
}
