"use client";
import PlaceCard from "@/components/page/test/PlaceCard";
import { useState } from "react";
import { QuestionType } from "@/service/test/test";

export default function TestQuestion() {
  const [answer, setAnswer] = useState<QuestionType>("None");
  return (
    <section
      className={
        "flex items-center justify-center gap-[30px] w-full pb-[100px] border-b-2 border-gray-100"
      }
    >
      <PlaceCard answer={answer} mine={"First"} setAnswer={setAnswer} />
      <p className={"text-h3 text-center text-gray-600 w-[100px]"}>vs</p>
      <PlaceCard answer={answer} mine={"Second"} setAnswer={setAnswer} />
    </section>
  );
}
