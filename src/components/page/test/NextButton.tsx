import IconArrowRight from "@/components/common/ui/icons/IconArrowRight";

export default function NextButton() {
  return (
    <button
      className={
        "flex items-center justify-center gap-[20px] w-[300px] h-[100px] rounded-[16px] bg-primary-600"
      }
    >
      <p className={"text-h2 text-white"}>다음</p>
      <IconArrowRight />
    </button>
  );
}
