import IconStarOutline from "@/components/common/ui/icons/IconStarOutline";
import IconStarFill from "@/components/common/ui/icons/IconStarFill";

type Props = {
  status: boolean;
};

export default function ButtonLike({ status }: Props) {
  return (
    <button className={"g-flex-center w-[40px] h-[40px] rounded-full bg-white"}>
      {status ? <IconStarFill /> : <IconStarOutline />}
    </button>
  );
}
