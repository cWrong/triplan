import { BiTimeFive } from "react-icons/bi";

export default function TestInfo() {
  return (
    <section
      className={
        "flex flex-col items-center justify-center py-[100px] min-h-[700px] bg-bg"
      }
    >
      <p className={"text-h1 text-primary-600"}>Triplan 여행 성격 검사</p>
      <p className={"text-body1R text-primary-400 flex items-center gap-[6px]"}>
        <BiTimeFive className={"w-[20px] h-[20px] text-primary-400"} />
        6분 내외
      </p>
      <div className={"flex items-center justify-center gap-[100px] h-[400px]"}>
        <div>illust</div>
        <div>illust</div>
        <div>illust</div>
        <div>illust</div>
      </div>
    </section>
  );
}
