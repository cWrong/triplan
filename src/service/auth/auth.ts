import {
  CredentialUserHashed,
  providerType,
  SanityUser,
  UserRequest,
  userType,
} from "@/model/user";
import { sanityClient } from "@/service/sanity";
import {
  getUserByUsernameAndProvider,
  getUserNumber,
} from "@/service/user/user";

export const getOrCreateUser = async (
  user: UserRequest,
  provider: string | undefined,
): Promise<number> => {
  if (!provider) return 0;

  if (!(await isNewUser(user.username, provider))) {
    const currentUser = await getUserByUsernameAndProvider(
      user.username,
      provider,
    );
    return currentUser.id;
  }

  const cntUser = await getUserNumber();

  const newUser: SanityUser = {
    _id: `user.${cntUser + 1}`,
    _type: userType,
    id: cntUser + 1,
    ...user,
  };

  const res = await sanityClient.createIfNotExists(newUser);
  return res.id;
};

export const addCredentialUser = async (
  user: CredentialUserHashed,
): Promise<boolean> => {
  const { username, pwHash } = user;

  if (!(await isNewUser(username, providerType.credentials))) return false;

  const cntUser = await getUserNumber();
  const newUser: SanityUser = {
    _id: `user.${cntUser + 1}`,
    _type: userType,
    id: cntUser + 1,
    username,
    pwHash,
    provider: providerType.credentials,
  };

  const res = await sanityClient.create(newUser);
  return !!res;
};

export const isUniqueUser = async (
  username: string,
  provider: string,
): Promise<boolean> => {
  const cnt = await getUserNumberByUsernameAndProvider(username, provider);
  return cnt === 1;
};

export const isNewUser = async (
  username: string,
  provider: string,
): Promise<boolean> => {
  const cnt = await getUserNumberByUsernameAndProvider(username, provider);
  return cnt === 0;
};

export const getUserNumberByUsernameAndProvider = async (
  username: string,
  provider: string,
): Promise<number> => {
  return await sanityClient.fetch<number>(
    `count(*[_type == "${userType}" && provider == "${provider}"  && username == "${username}"])`,
  );
};
