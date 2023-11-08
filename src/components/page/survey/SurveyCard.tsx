import Image from "next/image";
import React from "react";
import PlaceSanity from "@/service/place/place";

type Props = {
  placeId: number;
};
export default async function SurveyCard({ placeId }: Props) {
  const placeImage = await PlaceSanity.getPlaceImage(placeId);
  const { id, name, image } = placeImage;
  return (
    <Image
      src={image}
      alt={name}
      width={400}
      height={580}
      className={`w-[320px] h-[464px] object-cover z-0 hover:opacity-90 active:opacity-80`}
    ></Image>
  );
}
