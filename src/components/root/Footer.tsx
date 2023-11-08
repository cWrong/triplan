import LogoTextWhite from "public/images/logo/logo_text_white.svg";
import Image from "next/image";

const Members = [
  {
    role: "AI Engineer",
    email: "yuiyt@korea.ac.kr",
  },
  {
    role: "FullStack Developer",
    email: "sjy0175@gmail.com",
  },
  {
    role: "Designer",
    email: "chloe191206@gmail.com",
  },
];

export default function Footer() {
  return (
    <div
      className={
        "flex flex-col gap-[40px] px-[80px] pt-[80px] pb-[100px] bg-primary-900 "
      }
    >
      <Image src={LogoTextWhite} alt={"Triplan"} className={"h-[56px] w-fit"} />
      <div className={"flex flex-col gap-[8px] text-white"}>
        <p className={"text-caption1B"}>Contact</p>
        <div className={"flex flex-col gap-[4px] text-caption2R"}>
          {Members.map((member) => (
            <div key={member.role}>
              <span>{member.role}</span> | <span>{member.email}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
