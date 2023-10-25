import { CredentialUser } from "@/model/user";
import { addCredentialUser } from "@/service/auth/auth";
import { hashing } from "@/utils/password";
import { HttpResult } from "@/model/httpResult";

export async function POST(request: Request) {
  const user: CredentialUser = await request.json();
  const pwHash = await hashing(user.password);
  const result = await addCredentialUser({ username: user.username, pwHash });
  if (result)
    return Response.json({ result }, { status: 201, statusText: "Created" });
  return Response.json(
    { message: "해당 아이디가 이미 존재합니다." },
    { status: 500, statusText: "Internal Server Error" },
  );
}
