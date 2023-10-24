import Modal from "@/components/common/ui/modal/Modal";
import IconClose from "@/components/common/ui/icons/IconClose";
import React from "react";
import Input from "@/components/common/ui/input/Input";
import Button from "@/components/common/ui/button/Button";
import IconGoogle from "@/components/common/ui/icons/IconGoogle";
import IconKakao from "@/components/common/ui/icons/IconKakao";
import { useInput } from "@/hooks/useInput";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

type Props = {
  modal: boolean;
  modalHandler: (b: boolean) => void;
  signupModalHandler: (b: boolean) => void;
  callbackUrl: string;
};
export default function LoginModal({
  modal,
  modalHandler,
  signupModalHandler,
  callbackUrl,
}: Props) {
  const router = useRouter();

  const [username, usernameOnchange, usernameReset] = useInput("");
  const [password, passwordOnchange, passwordReset] = useInput("");

  const submitOnclick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = await signIn("credentials", {
      callbackUrl,
      username,
      password,
    });
  };
  const googleOnclick = async () => {
    await signIn("google", { callbackUrl });
  };
  const kakaoOnclick = async () => {
    await signIn("kakao", { callbackUrl });
  };
  const signupOnclick = () => {
    modalHandler(false);
    signupModalHandler(true);
  };
  const closeButtonOnclick = () => {
    modalHandler(false);
    router.push(callbackUrl);
  };
  return (
    <Modal modal={modal} modalHandler={modalHandler}>
      <div className={"flex flex-col gap-[40px] px-[32px] py-[40px] "}>
        <div className={"flex justify-between w-full"}>
          <span className={"text-sub1 text-primary-600"}>로그인</span>
          <IconClose onClick={closeButtonOnclick} />
        </div>
        <form onSubmit={submitOnclick} className={"flex flex-col gap-[40px]"}>
          <div className={"flex flex-col gap-[20px]"}>
            <Input
              required={true}
              label={"아이디"}
              placeholder={"아이디를 입력하세요."}
              type={"text"}
              onChange={usernameOnchange}
            />
            <Input
              required={true}
              label={"비밀번호"}
              placeholder={"비밀번호를 입력하세요."}
              type={"password"}
              onChange={passwordOnchange}
            />
          </div>
          <div>
            <Button
              size={"big"}
              type={"filled"}
              full={true}
              buttonType={"submit"}
            >
              로그인
            </Button>
          </div>
        </form>
        <div className={"flex items-center justify-between gap-[8px]"}>
          <span className={"w-full h-[1px] bg-gray-50"}></span>
          <span className={"text-caption3R text-gray-400 whitespace-nowrap"}>
            또는
          </span>
          <span className={"w-full h-[1px] bg-gray-50"}></span>
        </div>
        <div className={"flex justify-center gap-[18px]"}>
          <span className={"cursor-pointer"} onClick={googleOnclick}>
            <IconGoogle />
          </span>
          <span className={"cursor-pointer"} onClick={kakaoOnclick}>
            <IconKakao />
          </span>
        </div>
        <div className={"w-full text-center"}>
          <span className={"text-caption3R"}>계정이 없으신가요? </span>
          <span
            className={
              "text-caption3B text-primary-600 underline cursor-pointer"
            }
            onClick={signupOnclick}
          >
            회원가입
          </span>
        </div>
      </div>
    </Modal>
  );
}
