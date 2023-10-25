import Modal from "@/components/common/ui/modal/Modal";
import IconClose from "@/components/common/ui/icons/IconClose";
import React, { useState } from "react";
import Input from "@/components/common/ui/input/Input";
import Button from "@/components/common/ui/button/Button";
import IconGoogle from "@/components/common/ui/icons/IconGoogle";
import IconKakao from "@/components/common/ui/icons/IconKakao";
import { useInput } from "@/hooks/useInput";
import { useStatus } from "@/hooks/useStatus";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { signUp } from "@/api/auth/auth";
import { hashing } from "@/utils/password";

type Props = {
  modal: boolean;
  modalHandler: (b: boolean) => void;
  callbackUrl: string;
};
export default function SignupModal({
  modal,
  modalHandler,
  callbackUrl,
}: Props) {
  const router = useRouter();

  const [username, usernameOnchange, usernameReset] = useInput("");
  const [password, passwordOnchange, passwordReset] = useInput("");
  const [passCheck, passCheckOnchange, passCheckReset] = useInput("");

  const [usernameError, setUsernameError] = useStatus(false);
  const [pwError, setPwError] = useStatus(false);
  const [pwCheckError, setPwCheckError] = useStatus(false);
  const [usernameErrorMessage, setUsernameErrorMessage] = useState("");
  const [pwErrorMessage, setPwErrorMessage] = useState("");
  const [pwCheckErrorMessage, setPwCheckErrorMessage] = useState("");

  const submitOnclick = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (username.length === 0) {
      setUsernameError(true);
      setUsernameErrorMessage("아이디를 입력하세요.");

      setPwError(false);
      setPwCheckError(false);
      return;
    }

    if (password.length === 8) {
      setPwError(true);
      setPwErrorMessage("비밀번호를 입력하세요.");

      setUsernameError(false);
      setPwCheckError(false);
      return;
    }

    if (password !== passCheck) {
      setPwCheckError(true);
      setPwCheckErrorMessage("비밀번호가 일치하지 않습니다.");

      setUsernameError(false);
      setPwError(false);
      return;
    }

    const res = await signUp({ username, password });
    if (!res.status) {
      setUsernameError(true);
      setUsernameErrorMessage(res.message);

      setPwError(false);
      setPwCheckError(false);
      return;
    }

    usernameReset();
    passwordReset();
    passCheckReset();
  };
  const googleOnclick = async () => {
    await signIn("google");
  };
  const kakaoOnclick = async () => {
    await signIn("kakao");
  };
  const closeButtonOnclick = () => {
    router.push(callbackUrl);
    modalHandler(false);
  };
  return (
    <Modal modal={modal} modalHandler={modalHandler}>
      <div className={"flex flex-col gap-[40px] px-[32px] py-[40px] "}>
        <div className={"flex justify-between w-full"}>
          <span className={"text-sub1 text-primary-600"}>회원가입</span>
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
              error={usernameError}
              errorMessage={usernameErrorMessage}
            />
            <Input
              required={true}
              label={"비밀번호"}
              placeholder={"비밀번호를 입력하세요."}
              type={"password"}
              onChange={passwordOnchange}
              error={pwError}
              errorMessage={pwErrorMessage}
            />
            <Input
              required={true}
              label={"비밀번호 확인"}
              placeholder={"비밀번호를 입력하세요."}
              type={"password"}
              onChange={passCheckOnchange}
              error={pwCheckError}
              errorMessage={pwCheckErrorMessage}
            />
          </div>
          <div>
            <Button
              size={"big"}
              type={"filled"}
              full={true}
              buttonType={"submit"}
            >
              회원가입
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
        <div className={"flex flex-col justify-center gap-[12px] w-full"}>
          <div className={"flex justify-center gap-[18px]"}>
            <span className={"cursor-pointer"} onClick={googleOnclick}>
              <IconGoogle />
            </span>
            <span className={"cursor-pointer"} onClick={kakaoOnclick}>
              <IconKakao />
            </span>
          </div>
          <p className={"text-caption3R text-gray-400 text-center"}>
            소셜 계정으로 회원가입
          </p>
        </div>
      </div>
    </Modal>
  );
}
