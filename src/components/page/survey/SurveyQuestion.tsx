"use client";
import SurveyCard from "@/components/page/survey/SurveyCard";
import { useState } from "react";
import { QuestionType } from "@/model/survey";

export default function SurveyQuestion() {
  const [answer, setAnswer] = useState<QuestionType>("None");
  return (
    <section
      className={"flex items-center justify-center gap-[40px] px-[30px] w-full"}
    >
      <SurveyCard answer={answer} mine={"First"} setAnswer={setAnswer} />
      <span className={"text-h3 text-center text-primary-400"}>vs</span>
      <SurveyCard answer={answer} mine={"Second"} setAnswer={setAnswer} />
    </section>
  );
}
