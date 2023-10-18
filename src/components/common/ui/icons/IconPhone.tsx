import { FiPhone } from "react-icons/fi";

type Props = {
  size: number;
  color: string;
};
export default function IconPhone({ size, color }: Props) {
  return <FiPhone className={`w-[${size}px] h-[${size}px] text-${color}`} />;
}
