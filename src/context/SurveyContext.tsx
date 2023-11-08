"use client";

import React, { createContext, useContext, useState } from "react";
import { DefaultSurveyAnswer, SurveyAnswer } from "@/model/survey";

export const SurveyContext = createContext<{
  surveyAnswer: SurveyAnswer;
  setSurveyAnswer: (answer: SurveyAnswer) => void;
}>({
  surveyAnswer: DefaultSurveyAnswer,
  setSurveyAnswer: () => {},
});

type Props = {
  children: React.ReactNode;
};

export function SurveyProvider({ children }: Props) {
  const [surveyAnswer, setSurveyAnswer] =
    useState<SurveyAnswer>(DefaultSurveyAnswer);

  return (
    <SurveyContext.Provider value={{ surveyAnswer, setSurveyAnswer }}>
      {children}
    </SurveyContext.Provider>
  );
}

export const useSurveyContext = () => {
  return useContext(SurveyContext);
};
