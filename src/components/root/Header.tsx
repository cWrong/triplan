"use client";
import Link from "next/link";
import Button from "@/components/common/ui/button/Button";
import { signIn, useSession } from "next-auth/react";
import IconProfile from "@/components/common/ui/icons/IconProfile";

export default function Header() {
  const { data: session } = useSession();
  const user = session?.user;
  return (
    <header
      className={
        "flex items-center justify-between w-full h-[80px] px-[80px] py-[16px]"
      }
    >
      <Link href={"/"}>Logo</Link>
      <Link href={"/plan"} className={"text-h4"}>
        plan
      </Link>
      <Link href={"/survey"} className={"text-h4"}>
        surveys
      </Link>
      <Link href={"/test-result"} className={"text-h4"}>
        test-result
      </Link>
      <Link href={"/my-list"} className={"text-h4"}>
        my-list
      </Link>
      {user ? (
        <Link href={`/profile/${user.name}`}>
          <IconProfile />
        </Link>
      ) : (
        <Button
          size={"big"}
          type={"filled"}
          onClick={() => {
            signIn();
          }}
        >
          로그인
        </Button>
      )}
    </header>
  );
}
