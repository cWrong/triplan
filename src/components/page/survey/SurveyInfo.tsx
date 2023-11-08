import IconClock from "@/components/common/ui/icons/IconClock";
import TTIImage from "@/components/common/TTIImage";

const ImageList = [2, 3, 6, 8];
// const ImageList = [7, 1, 4, 5];

export default function SurveyInfo() {
  return (
    <section
      className={
        "flex flex-col items-center justify-center gap-[80px] px-[80px] pt-[80px] pb-[40px] bg-bg"
      }
    >
      <div className={"flex flex-col items-center gap-[16px]"}>
        <p className={"text-h1 text-primary-600"}>Triplan 여행 성격 검사</p>
        <p
          className={"text-body1R text-primary-400 flex items-center gap-[6px]"}
        >
          <IconClock />
          6분 내외
        </p>
      </div>
      <div className={"flex items-center justify-center"}>
        {ImageList.map((ttiId) => (
          <TTIImage key={ttiId} ttiId={ttiId} />
        ))}
      </div>
    </section>
  );
}
