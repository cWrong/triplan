import { CredentialUserHashed, SanityUser, userType } from "@/model/user";
import { sanityClient } from "@/service/sanity";
import { getUserNumber } from "@/service/user/user";

export const addCredentialUser = async (
  user: CredentialUserHashed,
): Promise<boolean> => {
  if (!(await isNewUsername(user.username))) return false;

  const cntUser = await getUserNumber();
  const newUser: SanityUser = {
    _id: `user.${cntUser + 1}`,
    _type: "user",
    id: cntUser + 1,
    ...user,
    provider: "credential",
  };

  const res = await sanityClient.create(newUser);
  return !!res;
};

export const isUniqueUsername = async (username: string): Promise<boolean> => {
  const cnt = await sanityClient.fetch<number>(
    `count(*[_type == "${userType}" && username == "${username}"])`,
  );
  return cnt === 1;
};

export const isNewUsername = async (username: string): Promise<boolean> => {
  const cnt = await sanityClient.fetch<number>(
    `count(*[_type == "${userType}" && username == "${username}"])`,
  );
  return cnt === 0;
};
