import { CredentialUser, providerType } from "@/model/user";
import { check } from "@/utils/password";
import { isUniqueUser } from "@/service/auth/auth";
import { getUserByUsernameAndProvider } from "@/service/user/user";

export async function POST(request: Request) {
  const user: CredentialUser = await request.json();

  const userData = await getUserByUsernameAndProvider(
    user.username,
    providerType.credentials,
  );
  if (!userData || !userData.pwHash) {
    return Response.json(
      { message: "존재하지 않는 아이디입니다." },
      { status: 401, statusText: "Unauthorized" },
    );
  }

  const isRight = await check(user.password, userData.pwHash);
  if (!isRight) {
    return Response.json(
      { message: "비밀번호가 일치하지 않습니다." },
      { status: 401, statusText: "Unauthorized" },
    );
  }

  const { id, name, email, customImage } = userData;
  return Response.json(
    { id, name: name || "", email: email || "", image: customImage || "" },
    { status: 200, statusText: "OK" },
  );
}
