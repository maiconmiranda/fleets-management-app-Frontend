import React from "react";
import { Input } from "./Input";

export function FormField({
  name,
  label,
  placeholder,
  setName,
  type = "text",
}) {
  return (
    <>
      <Input
        type={type}
        name={name}
        label={label}
        value={name}
        onChange={(e) => `${setName}${e.target.value}`}
        placeholder={placeholder}
      />
    </>
  );
}
