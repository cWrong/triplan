import React, { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

type Props = {
  label?: string;
  placeholder?: string;
  required: boolean;
  type?: HTMLInputTypeAttribute | undefined;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  error?: boolean;
  errorMessage?: string;
};
export default function Input({
  label,
  placeholder,
  required,
  type,
  onChange,
  error,
  errorMessage,
}: Props) {
  return (
    <div className={"relative flex flex-col gap-[4px]"}>
      {label && <p className={"text-caption1R text-black"}>{label}</p>}
      <input
        placeholder={placeholder}
        required={required}
        className={`w-[320px] px-[16px] py-[13px] rounded-[12px] border border-gray-100 text-body1R text-gray-400 bg-gray-50 focus:text-black focus:bg-white focus:border-primary-100 ${
          error ? "border-caution-700" : ""
        }`}
        type={type}
        onChange={onChange}
      />
      {error && errorMessage && (
        <p
          className={
            "absolute left-0 -bottom-[24px] h-[20px] text-caption1R text-caution-400"
          }
        >
          {errorMessage}
        </p>
      )}
    </div>
  );
}
