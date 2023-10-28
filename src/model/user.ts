import { DocumentMetadata } from "@/model/sanity";

export type User = {
  id: number;
  username: string;
  name?: string;
  nickname?: string;
  email?: string;
  image?: string;
  customImage?: string;
  provider?: string;
  pwHash?: string;
};

export type UserRequest = Pick<
  User,
  "username" | "name" | "email" | "image" | "provider"
>;

export type UserSession = Pick<User, "id" | "name" | "email" | "image">;

export type SanityUser = User & DocumentMetadata;

export type CredentialUser = {
  username: string;
  password: string;
};

export type CredentialUserHashed = {
  username: string;
  pwHash: string;
};

export const getUserId = (id: number) => {
  return `${userType}.${id}`;
};

export const userType = "user";

export const providerType = {
  credentials: "credentials",
  google: "google",
  kakao: "kakao",
};
