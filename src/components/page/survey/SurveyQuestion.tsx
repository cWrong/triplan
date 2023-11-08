"use client";
import React from "react";
import { Question, SurveyAnswer } from "@/model/survey";
import { useSurveyContext } from "@/context/SurveyContext";
import Image from "next/image";

const Card_Style = "w-[320px] h-[464px] object-cover";
const Effect_Style =
  "absolute top-0 left-0 transition-all ease-in-out duration-200";

type Props = {
  index: number;
  question: Question;
  children: React.ReactNode[];
};

export default function SurveyQuestion({ index, question, children }: Props) {
  const { surveyAnswer, setSurveyAnswer } = useSurveyContext();

  const onClickFirst = () => {
    const newAnswer = [...surveyAnswer] as SurveyAnswer;
    newAnswer[index] = question.first;
    setSurveyAnswer(newAnswer);
  };

  const onClickSecond = () => {
    const newAnswer = [...surveyAnswer] as SurveyAnswer;
    newAnswer[index] = question.second;
    setSurveyAnswer(newAnswer);
  };

  return (
    <section
      className={"flex items-center justify-center gap-[40px] px-[30px] w-full"}
    >
      <div
        className={
          "relative w-[320px] h-[464px] rounded-[16px] overflow-hidden cursor-pointer"
        }
        onClick={onClickFirst}
      >
        {children[0]}
        <Image
          src={"/images/places/Selected.svg"}
          alt={"Selected"}
          width={400}
          height={580}
          className={`${Card_Style} ${Effect_Style} ${
            surveyAnswer[index] === question.first
              ? "opacity-70 z-10"
              : "opacity-0 -z-10"
          }`}
        ></Image>
      </div>
      <span className={"text-h3 text-center text-primary-400"}>vs</span>
      <div
        className={
          "relative w-[320px] h-[464px] rounded-[16px] overflow-hidden cursor-pointer"
        }
        onClick={onClickSecond}
      >
        {children[1]}
        <Image
          src={"/images/places/Selected.svg"}
          alt={"Selected"}
          width={400}
          height={580}
          className={`${Card_Style} ${Effect_Style} ${
            surveyAnswer[index] === question.second
              ? "opacity-70 z-10"
              : "opacity-0 -z-10"
          }`}
        ></Image>
      </div>
    </section>
  );
}
