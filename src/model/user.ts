import { DocumentMetadata } from "@/model/sanity";

export type User = {
  id: number;
  username: string;
  name?: string;
  nickname?: string;
  email?: string;
  imageUrl?: string;
  image?: string;
  provider?: string;
  pwHash: string;
};

export type SanityUser = User & DocumentMetadata;

export type CredentialUser = {
  username: string;
  password: string;
};

export type CredentialUserHashed = {
  username: string;
  pwHash: string;
};

export const userType = "user";
