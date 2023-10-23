"use client";

import { useModal } from "@/hooks/useModal";
import LoginModal from "@/components/root/LoginModal";
import SignupModal from "@/components/root/SignupModal";

type Props = {
  searchParams: {
    callbackUrl: string;
  };
};

export default function SignInPage({ searchParams: { callbackUrl } }: Props) {
  const [loginModal, loginModalHandler] = useModal(true);
  const [signupModal, signupModalHandler] = useModal(false);

  return (
    <div className={"flex justify-center mt-[60px]"}>
      <LoginModal
        modal={loginModal}
        modalHandler={loginModalHandler}
        signupModalHandler={signupModalHandler}
        callbackUrl={callbackUrl ?? "/"}
      />
      <SignupModal
        modal={signupModal}
        modalHandler={signupModalHandler}
        callbackUrl={callbackUrl ?? "/"}
      />
    </div>
  );
}
