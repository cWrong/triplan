import { SizedTuple } from "@/model/customTypes";

export type AnswerType = "First" | "Second";
export type QuestionType = "None" | AnswerType;

export type Question = {
  first: number;
  second: number;
};

export type SurveyAnswer = SizedTuple<number, 20>;

export const DefaultSurveyAnswer = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
] as SurveyAnswer;
