import LogoText from "public/images/logo/logo_text.svg";
import Image from "next/image";

type Props = {
  size: "small" | "big";
};

export default function Logo({ size }: Props) {
  return (
    <Image
      src={LogoText}
      alt={"Triplan"}
      className={`${size === "small" ? "h-[40px]" : "h-[60px]"} w-fit`}
    />
  );
}
