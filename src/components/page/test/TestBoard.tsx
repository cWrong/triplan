import TestQuestion from "@/components/page/test/TestQuestion";
import NextButton from "@/components/page/test/NextButton";

export default function TestBoard() {
  return (
    <section className={"flex flex-col items-center gap-[100px] py-[100px]"}>
      <p className={"text-h2"}>어떤 곳을 더 선호하시나요 ?</p>
      <TestQuestion />
      <TestQuestion />
      <TestQuestion />
      <TestQuestion />
      <NextButton />
    </section>
  );
}
