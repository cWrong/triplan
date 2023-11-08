import React from "react";
import { SurveyProvider } from "@/context/SurveyContext";

export default function SurveyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SurveyProvider>{children}</SurveyProvider>;
}
