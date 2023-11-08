"use client";
import IconArrowRight from "@/components/common/ui/icons/IconArrowRight";
import Button from "@/components/common/ui/button/Button";
import React from "react";
import { useSurveyContext } from "@/context/SurveyContext";

export default function SurveyButton() {
  const { surveyAnswer } = useSurveyContext();

  const onClick = () => {
    console.log(surveyAnswer);
  };

  return (
    <Button size={"big"} type={"filled"} onClick={onClick}>
      다음 <IconArrowRight />
    </Button>
  );
}
