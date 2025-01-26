import React, { useState } from "react";

interface CheckBoxProps {
  color?: "primary" | "secondary" | "tertiary";
  label?: string;
  size?: "small" | "medium" | "large";
  onChange?(checked: boolean): void;
  value: string;
}

export const CheckBox = ({
  color = "primary",
  label,
  size = "small",
  onChange,
  value,
}: CheckBoxProps) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setChecked(isChecked);
    if (onChange) {
      onChange(isChecked);
    }
  };

  const colorClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    tertiary: "text-tertiary",
  }[color];

  const sizeClasses = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  }[size];

  return (
    <div className={`checkbox ${colorClasses} ${sizeClasses}`}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        value={value}
        className="rounded-sm"
      />
      {label && <label className="ml-2">{label}</label>}
    </div>
  );
};
