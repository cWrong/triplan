import { CredentialUser } from "@/model/user";
import { check, hashing } from "@/utils/password";
import { addCredentialUser, isUniqueUsername } from "@/service/auth/auth";
import { getUserByUsername } from "@/service/user/user";

export async function POST(request: Request) {
  const user: CredentialUser = await request.json();

  const isUnique = await isUniqueUsername(user.username);
  if (!isUnique) {
    return Response.json(
      { message: "존재하지 않는 아이디입니다." },
      { status: 401, statusText: "Unauthorized" },
    );
  }

  const userData = await getUserByUsername(user.username);
  if (!userData) {
    return Response.json(
      { message: "유저 정보를 찾을 수 없습니다." },
      { status: 500, statusText: "Internal Server Error" },
    );
  }

  const isRight = await check(user.password, userData.pwHash);
  if (!isRight) {
    return Response.json(
      { message: "비밀번호가 일치하지 않습니다." },
      { status: 401, statusText: "Unauthorized" },
    );
  }

  console.log("sex");

  return Response.json({ userData }, { status: 200, statusText: "OK" });
}
