import { AiOutlineClose } from "react-icons/ai";

type Props = {
  onClick: () => void;
};
export default function IconClose({ onClick }: Props) {
  return (
    <AiOutlineClose
      className={`w-[24px] h-[24px] text-black rounded-full bg-white hover:bg-gray-100 active:bg-gray-200 cursor-pointer`}
      onClick={onClick}
    />
  );
}
