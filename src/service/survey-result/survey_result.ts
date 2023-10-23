import { sanityClient, urlFor } from "@/service/sanity";
import { TTI, ttiType } from "@/model/tti";

export const getTTIById = async (ttiId: number): Promise<TTI> => {
  const { id, name, description, traits, image } =
    await sanityClient.fetch<TTI>(
      `
    *[_type == "${ttiType()}" && id == ${ttiId}][0]
    {
      id,
      name,
      description,
      traits,
      image,
    }`,
    );

  return {
    id,
    name,
    description,
    traits,
    image: urlFor(image).url(),
  };
};
