import bcrypt from "bcrypt";

export const hashing = async (password: string) => {
  const saltRound = 10;
  const salt = await bcrypt.genSalt(saltRound);
  return await bcrypt.hash(password, salt);
};

export const check = async (password: string, pwHash: string) => {
  return await bcrypt.compare(password, pwHash);
};
