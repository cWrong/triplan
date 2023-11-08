"use client";
import React from "react";

type Props = {
  size: "small" | "big";
  type: "filled" | "outlined";
  full?: boolean;
  children: string | React.ReactNode;
  onClick?: () => void;
  buttonType?: "button" | "submit" | "reset";
};
export default function Button({
  size,
  type,
  full,
  children,
  onClick,
  buttonType,
}: Props) {
  return (
    <button
      className={`${
        size === "small"
          ? "px-[16px] py-[9px] w-fit h-fit text-body2B"
          : "px-[20px] py-[12px] w-fit h-fit text-body1B"
      } ${
        type === "filled"
          ? "bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 disabled:bg-gray-200 disabled:text-gray-300"
          : "bg-white border border-primary-600 text-primary-600 hover:border-primary-700 hover:text-primary-700 active:border-primary-800 active:text-primary-800 disabled:bg-gray-100 disabled:text-gray-200"
      } ${full && "w-full"}
      rounded-[12px] flex items-center justify-center gap-[10px]`}
      onClick={onClick}
      type={buttonType}
    >
      {children}
    </button>
  );
}
