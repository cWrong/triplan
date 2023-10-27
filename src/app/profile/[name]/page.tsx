"use client";
import Button from "@/components/common/ui/button/Button";
import { signOut } from "next-auth/react";

type Props = {
  params: {
    username: string;
  };
};

export default function ProfilePage({ params: { username } }: Props) {
  return (
    <section>
      <h1>{username} Profile Page</h1>
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
