import Modal from "@/components/common/ui/modal/Modal";
import IconClose from "@/components/common/ui/icons/IconClose";
import React from "react";
import Input from "@/components/common/ui/input/Input";
import Button from "@/components/common/ui/button/Button";
import IconGoogle from "@/components/common/ui/icons/IconGoogle";
import IconKakao from "@/components/common/ui/icons/IconKakao";
import { useInput } from "@/hooks/useInput";
import { useStatus } from "@/hooks/useStatus";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

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

  const [error, setError] = useStatus(false);

  const submitOnclick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== passCheck) {
      console.log("password error");
      setError(true);
      return;
    }

    console.log(username, password);

    usernameReset();
    passwordReset();
    passCheckReset();
    setError(false);
  };
  const googleOnclick = () => {
    signIn("google");
  };
  const kakaoOnclick = () => {
    signIn("kakao");
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
            />
            <Input
              required={true}
              label={"비밀번호"}
              placeholder={"비밀번호를 입력하세요."}
              type={"password"}
              onChange={passwordOnchange}
            />
            <Input
              required={true}
              label={"비밀번호 확인"}
              placeholder={"비밀번호를 입력하세요."}
              type={"password"}
              onChange={passCheckOnchange}
              error={error}
              errorMessage={"비밀번호가 일치하지 않습니다."}
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
