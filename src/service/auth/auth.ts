import {
  CredentialUserHashed,
  providerType,
  SanityUser,
  User,
  UserRequest,
  userType,
} from "@/model/user";
import { sanityClient } from "@/service/sanity";
import { getUserNumber } from "@/service/user/user";

export const addOAuthUser = async (user: UserRequest): Promise<boolean> => {
  const cntUser = await getUserNumber();
  const newUser: SanityUser = {
    _id: `user-${user.provider}-${user.username}`,
    _type: userType,
    id: cntUser + 1,
    ...user,
  };

  const res = await sanityClient.createIfNotExists(newUser);
  return !!res;
};

export const addCredentialUser = async (
  user: CredentialUserHashed,
): Promise<boolean> => {
  const { username, pwHash } = user;

  if (!(await isNewUsername(username))) return false;

  const cntUser = await getUserNumber();
  const newUser: SanityUser = {
    _id: `user-${providerType.credential}.${username}`,
    _type: userType,
    id: cntUser + 1,
    username,
    pwHash,
    provider: providerType.credential,
  };

  const res = await sanityClient.create(newUser);
  return !!res;
};

export const isUniqueUsername = async (username: string): Promise<boolean> => {
  const cnt = await getCredentialUserNumberByUsername(username);
  return cnt === 1;
};

export const isNewUsername = async (username: string): Promise<boolean> => {
  const cnt = await getCredentialUserNumberByUsername(username);
  return cnt === 0;
};

export const getCredentialUserNumberByUsername = async (
  username: string,
): Promise<number> => {
  return await sanityClient.fetch<number>(
    `count(*[_type == "${userType}" && provider == "${providerType.credential}"  && username == "${username}"])`,
  );
};
