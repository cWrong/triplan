import { CredentialUser } from "@/model/user";
import { HttpResult } from "@/model/httpResult";

export const signUp = async (user: CredentialUser): Promise<HttpResult> => {
  const response = await fetch("/api/signup", {
    method: "POST",
    body: JSON.stringify(user),
    headers: { "Content-Type": "application/json" },
  });
  const res = await response.json();

  if (response.ok)
    return {
      status: true,
      data: res,
    };
  else
    return {
      status: false,
      message: res.message,
    };
};
