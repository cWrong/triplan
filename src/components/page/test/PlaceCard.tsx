import Image from "next/image";
import { AnswerType, QuestionType } from "@/service/test/test";

type Props = {
  answer: QuestionType;
  mine: AnswerType;
  setAnswer: (answer: QuestionType) => void;
};

type CardStatus = "Default" | "Selected" | "UnSelected";

const Card_Style = "w-[400px] h-[580px] object-cover";
const Effect_Style =
  "absolute top-0 left-0 z-10 opacity-70 transition-all ease-in-out duration-1000";

const getStatus = (answer: QuestionType, mine: AnswerType): CardStatus => {
  if (answer === "None") return "Default";
  else if (answer === mine) return "Selected";
  else return "UnSelected";
};

export default function PlaceCard({ answer, mine, setAnswer }: Props) {
  const onClick = () => {
    setAnswer(mine);
  };

  return (
    <div
      className={
        "relative w-[400px] h-[580px] rounded-[16px] overflow-hidden cursor-pointer"
      }
      onClick={onClick}
    >
      <Image
        src={"/images/places/TokyoDisneySea.jpg"}
        alt={"TokyoDisneySea"}
        width={400}
        height={580}
        className={Card_Style}
      ></Image>
      {getStatus(answer, mine) === "Selected" && (
        <Image
          src={"/images/places/Selected.jpg"}
          alt={"Selected"}
          width={400}
          height={580}
          className={`${Card_Style} ${Effect_Style}`}
        ></Image>
      )}
      {getStatus(answer, mine) === "UnSelected" && (
        <Image
          src={"/images/places/Unselected.jpg"}
          alt={"Selected"}
          width={400}
          height={580}
          className={`${Card_Style} ${Effect_Style}`}
        ></Image>
      )}
    </div>
  );
}
