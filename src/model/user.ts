import { DocumentMetadata } from "@/model/sanity";

export type User = {
  name: string;
  nickname?: string;
  email: string;
  image: string;
  customImage?: string;
};

export type UserSession = Pick<User, "name" | "email" | "image">;

export type SanityUser = User & DocumentMetadata;

export const getUserId = (id: number) => {
  return `${userType}.${id}`;
};

export const userType = "user";

export const providerType = {
  google: "google",
  kakao: "kakao",
};
