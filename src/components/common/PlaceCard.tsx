import { getPlace } from "@/service/place/place";
import Image from "next/image";
import IconLocation from "@/components/common/ui/icons/IconLocation";
import IconPhone from "@/components/common/ui/icons/IconPhone";
import ButtonLike from "@/components/common/ui/button/ButtonLike";
import ButtonFlip from "@/components/common/ui/button/ButtonFlip";
import GaugeBar from "@/components/common/ui/bar/GaugeBar";
import { RecommendPlace } from "@/model/recommendPlace";

type Props = {
  place: RecommendPlace;
};

export default async function PlaceCard({ place }: Props) {
  const {
    star,
    fitness,
    place: {
      id,
      name,
      country,
      city,
      address,
      phoneNumber,
      type,
      description,
      image,
      path,
    },
  } = place;

  return (
    <section
      className={
        "w-[320px] h-[440px] rounded-[16px] overflow-hidden [perspective:1000px]"
      }
    >
      <div className={"absolute top-[20px] left-[16px] z-10 peer"}>
        <ButtonFlip />
      </div>
      <div
        className={
          "relative w-full h-full transition-all duration-500 [transform-style:preserve-3d] peer-hover:[transform:rotateY(180deg)] [backface-visibility:hidden]"
        }
      >
        <div className={"absolute inset-0"}>
          <div className={"relative g-flex-center h-[153px] overflow-hidden"}>
            <Image
              src={image}
              alt={path}
              width={320}
              height={153}
              className={"object-cover"}
              priority
            />

            <div className={"absolute right-[16px] bottom-[16px]"}>
              <ButtonLike placeId={id} status={star} />
            </div>
          </div>
          <div
            className={
              "flex flex-col justify-between bg-white gap-[20px] px-[16px] py-[20px]"
            }
          >
            <div className={"flex flex-col justify-between gap-[4px]"}>
              <p className={"text-sub2 text-black truncate"}>{name}</p>
              <div className={"flex items-center gap-[4px]"}>
                <span className={"text-caption1B text-gray-600"}>
                  {country}
                </span>
                <div
                  className={"w-[4px] h-[4px] rounded-full bg-gray-200"}
                ></div>
                <span className={"text-caption1B text-gray-600"}>{city}</span>
              </div>
            </div>
            <div className={"flex flex-col gap-[8px]"}>
              <div className={"flex gap-[4px]"}>
                <span className={"min-w-[20px]"}>
                  <IconPhone />
                </span>
                <p className={"text-caption1R text-black"}>
                  {phoneNumber ? `${phoneNumber}` : "-"}
                </p>
              </div>
              <div className={"flex gap-[4px] h-[40px]"}>
                <span className={"min-w-[20px]"}>
                  <IconLocation />
                </span>
                <p className={"text-caption1R text-black"}>{address}</p>
              </div>
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
                <GaugeBar size={"small"} gauge={fitness} />
                <span className={"text-sub2 text-primary-600"}>{fitness}%</span>
              </div>
            </div>
          </div>
        </div>
        <div
          className={
            "relative absolute inset-0 w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-start gap-[20px] px-[16px] py-[20px]"
          }
        >
          <div className={"absolute inset-0 bg-primary-900 opacity-90 -z-10"} />
          <Image
            src={image}
            alt={path}
            width={320}
            height={440}
            className={"absolute inset-0 h-full object-cover -z-20"}
          />
          <p className={"text-sub1 text-white pt-[60px]"}>{name}</p>
          <p className={"text-body1R text-white"}>{description}</p>
        </div>
      </div>
    </section>
  );
}
