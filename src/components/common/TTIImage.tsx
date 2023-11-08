import Image from "next/image";
import { getTTIById } from "@/service/survey-result/survey_result";

type Props = {
  ttiId: number;
};
export default async function TTIImage({ ttiId }: Props) {
  const { name, image } = await getTTIById(ttiId);

  return (
    <Image
      src={image}
      alt={name}
      width={317}
      height={317}
      className={"object-cover"}
      priority
    />
  );
}
