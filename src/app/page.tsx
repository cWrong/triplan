import Link from "next/link";
import Image from "next/image";
import Button from "@/components/common/ui/button/Button";
import Card from "@/components/common/ui/card/card";
import MainImage from "public/images/assets/main.jpg";
import MainSection1Image from "public/images/assets/main_section_1.jpg";
import MainSection2Image from "public/images/assets/main_section_2.jpg";
import MainSection3Image from "public/images/assets/main_section_3.jpg";

export default function Home() {
  return (
    <main className={"w-full"}>
      <section className={"relative"}>
        <Image
          src={MainImage}
          alt={"여행 성격 검사"}
          width={2400}
          height={2700}
          className={"relative absolute inset-0 -z-20 object-cover"}
        />
        <div
          className={"absolute inset-0 w-full h-full bg-black opacity-20 -z-10"}
        />
        <div className={"absolute top-1/3 flex flex-col gap-[40px] px-[100px]"}>
          <div>
            <p className={"text-h1 text-white"}>
              여행지, 어디로 갈지 고민 중이신가요?
            </p>
            <p className={"text-h1 text-white"}>
              Triplan에서 여행 선호 유형에 맞는 계획을 세워 드려요!
            </p>
          </div>
          <Link href={"/survey"}>
            <Button size={"big"} type={"filled"}>
              내 유형 찾으러 가기!
            </Button>
          </Link>
        </div>
      </section>
      <section className={"flex flex-col gap-[140px] py-[100px]"}>
        <div
          className={"flex justify-center items-center gap-[80px] px-[40px]"}
        >
          <Card size={"big"}>
            <Image
              src={MainSection1Image}
              alt={"설문조사"}
              className={"object-cover w-full h-full"}
            />
          </Card>
          <div className={"flex flex-col gap-[12px] w-[600px]"}>
            <p className={"text-h2"}>설문조사</p>
            <p className={"text-body1R"}>
              간단한 카드 선택으로 찾을 수 있는 여행 선호 유형 검사
            </p>
          </div>
        </div>
        <div
          className={"flex justify-center items-center gap-[80px] px-[40px]"}
        >
          <div className={"flex flex-col text-right gap-[12px] w-[600px]"}>
            <p className={"text-h2"}>결과</p>
            <p className={"text-body1R"}>
              여행 선호 유형 확인 및 유형에 맞는 여행지 추천
            </p>
          </div>
          <Card size={"big"}>
            <Image
              src={MainSection2Image}
              alt={"설문조사"}
              className={"object-cover w-full h-full"}
            />
          </Card>
        </div>
        <div
          className={"flex justify-center items-center gap-[80px] px-[40px]"}
        >
          <Card size={"big"}>
            <Image
              src={MainSection3Image}
              alt={"설문조사"}
              className={"object-cover w-full h-full"}
            />
          </Card>
          <div className={"flex flex-col gap-[12px] w-[600px]"}>
            <p className={"text-h2"}>계획</p>
            <p className={"text-body1R"}>
              여행 선호 유형에 맞는 여행 계획 추천
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
