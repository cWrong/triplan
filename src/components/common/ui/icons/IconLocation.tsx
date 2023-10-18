import { GrLocation } from "react-icons/gr";

type Props = {
  size: number;
  color: string;
};
export default function IconLocation({ size, color }: Props) {
  return <GrLocation className={`w-[${size}px] h-[${size}px] text-${color}`} />;
}
