import SurveyQuestion from "@/components/page/survey/SurveyQuestion";
import RandomUtils from "@/utils/random";
import NumberUtils from "@/utils/number";
import React from "react";
import SurveyCard from "@/components/page/survey/SurveyCard";
import SurveyButton from "@/components/page/survey/SurveyButton";

export default function SurveyBoard() {
  const numbers = RandomUtils.getRandomNumbers(1000, 40);
  const questions = NumberUtils.splitArrayIntoPairs(numbers);

  return (
    <section className={"flex flex-col items-center gap-[80px] py-[80px]"}>
      <p className={"text-sub2"}>어떤 곳을 더 선호하시나요 ?</p>
      <div className={"flex flex-col items-center gap-[100px]"}>
        {questions.map((question, index) => (
          <SurveyQuestion key={index} index={index} question={question}>
            <SurveyCard placeId={question.first} />
            <SurveyCard placeId={question.second} />
          </SurveyQuestion>
        ))}
      </div>
      <SurveyButton />
    </section>
  );
}
