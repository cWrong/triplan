"use client";
import Button from "@/components/common/ui/button/Button";
import { signOut } from "next-auth/react";

type Props = {
  params: {
    name: string;
  };
};

export default function MyPage({ params: { name } }: Props) {
  return (
    <section>
      <h1>{name} MyPage</h1>
      <Button
        size={"big"}
        type={"filled"}
        onClick={() => {
          signOut();
        }}
      >
        Log out
      </Button>
    </section>
  );
}
