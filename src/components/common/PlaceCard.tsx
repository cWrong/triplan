import { getPlace } from "@/service/place/place";
import Image from "next/image";
import IconLocation from "@/components/common/ui/icons/IconLocation";
import IconPhone from "@/components/common/ui/icons/IconPhone";

type Props = {
  placeId: number;
};

export default async function PlaceCard({ placeId }: Props) {
  const {
    id,
    path,
    name,
    country,
    city,
    province,
    type,
    address,
    phoneNumber,
    image,
  } = await getPlace(placeId);

  // [!] should change
  const fitness: number = 64;

  return (
    <section
      className={"w-[320px] h-[440px] rounded-[16px] bg-white overflow-hidden"}
    >
      <div className={"g-flex-center h-[153px] overflow-hidden"}>
        <Image
          src={image}
          alt={path}
          width={320}
          height={153}
          className={"object-cover"}
        />
      </div>
      <div
        className={
          "flex flex-col justify-between gap-[20px] px-[16px] py-[20px]"
        }
      >
        <div className={"flex flex-col justify-between gap-[4px]"}>
          <p className={"text-sub2 text-black"}>{name}</p>
          <div className={"flex items-center gap-[4px]"}>
            <span className={"text-caption1B text-gray-600"}>{country}</span>
            <div className={"w-[4px] h-[4px] rounded-full bg-gray-200"}></div>
            <span className={"text-caption1B text-gray-600"}>{city}</span>
          </div>
        </div>
        <div className={"flex flex-col gap-[8px]"}>
          <div className={"flex gap-[4px]"}>
            <IconLocation size={20} color={"black"} />
            <p className={"text-caption1R text-black"}>{address}</p>
          </div>
          {phoneNumber && (
            <div className={"flex gap-[4px]"}>
              <IconPhone size={20} color={"black"} />
              <p className={"text-caption1R text-black"}>{phoneNumber}</p>
            </div>
          )}
        </div>
        <div className={"flex gap-[10px]"}>
          {type.map((t) => (
            <span
              className={
                "px-[12px] pt-[3px] pb-[2px] rounded-[8px] bg-gray-700 text-white text-caption2R"
              }
              key={t}
            >
              {t}
            </span>
          ))}
        </div>
        <div>
          <p className={"text-caption2B text-black"}>적합도</p>
          <div className={"flex items-center gap-[8px]"}>
            <div
              className={"relative h-[12px] w-full rounded-full bg-gray-100 "}
            >
              <div
                className={`absolute top-0 left-0 h-[12px] w-[${fitness}%] rounded-full bg-primary-600 z-10`}
              ></div>
            </div>
            <span className={"text-sub2 text-primary-600"}>{fitness}%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
