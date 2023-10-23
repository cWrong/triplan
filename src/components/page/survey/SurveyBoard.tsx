import SurveyQuestion from "@/components/page/survey/SurveyQuestion";
import NextButton from "@/components/page/survey/NextButton";
import Button from "@/components/common/ui/button/Button";
import IconArrowRight from "@/components/common/ui/icons/IconArrowRight";

export default function SurveyBoard() {
  return (
    <section className={"flex flex-col items-center gap-[80px] py-[80px]"}>
      <p className={"text-sub2"}>어떤 곳을 더 선호하시나요 ?</p>
      <div className={"flex flex-col items-center gap-[100px]"}>
        <SurveyQuestion />
        <SurveyQuestion />
        <SurveyQuestion />
        <SurveyQuestion />
      </div>
      <Button size={"big"} type={"filled"}>
        다음 <IconArrowRight />
      </Button>
    </section>
  );
}
