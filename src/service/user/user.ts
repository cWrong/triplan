import { sanityClient } from "@/service/sanity";
import { SanityUser, userType } from "@/model/user";

export const getUserById = async (id: number): Promise<SanityUser> => {
  return await sanityClient.fetch<SanityUser>(`
    *[_type == "${userType}" && id == ${id}][0]
  `);
};

export const getUserByUsername = async (
  username: string,
): Promise<SanityUser> => {
  return await sanityClient.fetch<SanityUser>(`
    *[_type == "${userType}" && username == "${username}"][0]
  `);
};

export const getUserNumber = async (): Promise<number> => {
  return await sanityClient.fetch<number>(`
    count(*[_type == "${userType}"])
  `);
};
