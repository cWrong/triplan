import IconFlip from "@/components/common/ui/icons/IconFlip";

export default function ButtonFlip() {
  return (
    <button
      className={
        "g-flex-center w-[40px] h-[40px] rounded-[4px] bg-black bg-opacity-60 z-10"
      }
    >
      <IconFlip />
    </button>
  );
}
