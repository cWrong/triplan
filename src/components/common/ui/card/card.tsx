import React from "react";

type Props = {
  size: "small" | "big";
  children: React.ReactNode;
};
export default function Card({ size, children }: Props) {
  return (
    <div
      className={`${
        size === "big" ? "w-[600px] h-[400px]" : "w-[420px] h-[280px]"
      } shadow-lg rounded-[16px] overflow-hidden`}
    >
      {children}
    </div>
  );
}
