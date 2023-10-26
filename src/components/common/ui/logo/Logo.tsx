import LogoImage from "public/images/logo/logo.jpg";
import Image from "next/image";

type Props = {
  size: "small" | "big";
};

export default function Logo({ size }: Props) {
  return (
    <Image
      src={LogoImage}
      alt={"Triplan"}
      className={`${
        size === "small" ? "w-[40px] h-[40px]" : "w-[60px] h-[60px]"
      }`}
    />
  );
}
