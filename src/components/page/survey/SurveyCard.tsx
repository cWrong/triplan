import Image from "next/image";
import { AnswerType, QuestionType } from "@/model/survey";

type Props = {
  answer: QuestionType;
  mine: AnswerType;
  setAnswer: (answer: QuestionType) => void;
};

const Card_Style = "w-[320px] h-[464px] object-cover";
const Effect_Style =
  "absolute top-0 left-0 transition-all ease-in-out duration-200";

export default function SurveyCard({ answer, mine, setAnswer }: Props) {
  const onClick = () => {
    setAnswer(mine);
    // [!] scroll down
  };

  return (
    <div
      className={
        "relative w-[320px] h-[464px] rounded-[16px] overflow-hidden cursor-pointer"
      }
      onClick={onClick}
    >
      <Image
        src={"/images/places/TokyoDisneySea.jpg"}
        alt={"TokyoDisneySea"}
        width={400}
        height={580}
        className={`${Card_Style} z-0 hover:opacity-90 active:opacity-80`}
      ></Image>
      <Image
        src={"/images/places/Selected.svg"}
        alt={"Selected"}
        width={400}
        height={580}
        className={`${Card_Style} ${Effect_Style} ${
          answer === mine ? "opacity-70 z-10" : "opacity-0 -z-10"
        }`}
      ></Image>
    </div>
  );
}
