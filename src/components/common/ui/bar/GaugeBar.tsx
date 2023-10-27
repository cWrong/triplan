type Props = {
  size: "small" | "big";
  gauge: number;
};

export default function GaugeBar({ size, gauge }: Props) {
  return (
    <div
      className={`relative ${
        size === "small" ? "h-[12px]" : "h-[24px]"
      } w-full rounded-full bg-gray-100`}
    >
      <div
        className={`absolute top-0 left-0 ${
          size === "small" ? "h-[12px]" : "h-[24px]"
        } rounded-full bg-primary-600 z-10`}
        style={{ width: `${gauge}%` }}
      ></div>
    </div>
  );
}
