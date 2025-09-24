"use client";

import React from "react";

interface InputFieldProps {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}) => {
  return (
    <div className="flex pt-3 flex-col">
      <div className="text-sm font-semibold ml-1">{label}</div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="border h-12 placeholder-[#45A185] border-[#CCEBE0] rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-[#45A185]"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputField;
