"use client";
import IconStarOutline from "@/components/common/ui/icons/IconStarOutline";
import IconStarFill from "@/components/common/ui/icons/IconStarFill";

type Props = {
  placeId: number;
  status: boolean;
};

export default function ButtonLike({ placeId, status }: Props) {
  const onClick = () => {
    console.log("placeId", placeId);
  };
  return (
    <button
      className={"g-flex-center w-[40px] h-[40px] rounded-full bg-white"}
      onClick={onClick}
    >
      {status ? <IconStarFill /> : <IconStarOutline />}
    </button>
  );
}
