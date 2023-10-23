"use client";
import Link from "next/link";
import Button from "@/components/common/ui/button/Button";
import LoginModal from "@/components/root/LoginModal";
import SignupModal from "@/components/root/SignupModal";
import { useModal } from "@/hooks/useModal";
import { signIn } from "next-auth/react";

export default function Header() {
  return (
    <header
      className={
        "flex items-center justify-between w-full h-[80px] px-[80px] py-[16px]"
      }
    >
      <Link href={"/"}>Logo</Link>
      <Button
        size={"big"}
        type={"filled"}
        onClick={() => {
          signIn();
          // loginModalHandler(true);
        }}
      >
        로그인
      </Button>
    </header>
  );
}
