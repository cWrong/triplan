"use client";
import IconStarOutline from "@/components/common/ui/icons/IconStarOutline";
import IconStarFill from "@/components/common/ui/icons/IconStarFill";
import RecommendPlaceApi from "@/api/recommend-place";
import { useStatus } from "@/hooks/useStatus";

type Props = {
  docId: string;
  _key: string;
  status: boolean;
};

export default function ButtonLike({ docId, _key, status }: Props) {
  const [star, setStar] = useStatus(status);
  const [starStatus, setStarStatus] = useStatus(status);

  const onClick = async () => {
    setStar(!starStatus);
    RecommendPlaceApi.patchStar({
      docId,
      _key,
      status: !star,
    })
      .then((res) => {
        setStarStatus(!starStatus);
      })
      .catch((err) => {
        setStar(starStatus);
      });
  };

  return (
    <button
      className={"g-flex-center w-[40px] h-[40px] rounded-full bg-white"}
      onClick={onClick}
    >
      {star ? <IconStarFill /> : <IconStarOutline />}
    </button>
  );
}
