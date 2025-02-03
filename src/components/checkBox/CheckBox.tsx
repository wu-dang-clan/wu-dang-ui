import { useState } from "react";
import icons from "../../shared/assets/icons";

interface CheckBoxProps {
  style: "filled" | "tonal";
  color: "primary" | "secondary" | "tertiary";
  label?: string;
  size: "small" | "medium" | "large";
  onChange?(checked: boolean): void;
  value: string;
}

export const CheckBox = ({
  style = "filled",
  color = "primary",
  label,
  size = "small",
  onChange,
  value,
}: CheckBoxProps) => {
  const [checked, setChecked] = useState(false);
  const SVGIcon = icons["done"];

  const handleChange = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    if (onChange) {
      onChange(newChecked);
    }
  };

  const filledColors = {
    primary: `border-primary ${checked ? "bg-primary" : "bg-white"}`,
    secondary: `border-secondary ${checked ? "bg-secondary" : "bg-white"}`,
    tertiary: `border-tertiary ${checked ? "bg-tertiary" : "bg-white"}`,
  };

  const tonalColors = {
    primary: `border-primary ${checked ? "bg-primaryContainer" : "bg-white"}`,
    secondary: `border-secondary ${checked ? "bg-secondaryContainer" : "bg-white"}`,
    tertiary: `border-tertiary ${checked ? "bg-tertiaryContainer" : "bg-white"}`,
  };

  const svgFilledColors = {
    primary: `fill-onPrimary`,
    secondary: `fill-onSecondary`,
    tertiary: `fill-onTertiary`,
  };

  const svgTonalColors = {
    primary: `${checked ? "fill-primary" : "fill-white"}`,
    secondary: `${checked ? "fill-secondary" : "fill-white"}`,
    tertiary: `${checked ? "fill-tertiary" : "fill-white"}`,
  };
  const styledClasses =
    {
      filled: filledColors[color],
      tonal: tonalColors[color],
    }[style] || filledColors["primary"];

  const svgStyledClasses =
    {
      filled: svgFilledColors[color],
      tonal: svgTonalColors[color],
    }[style] || svgFilledColors["primary"];

  const textColorClasses = {
    primary: "text-primary",
    secondary: "text-secondary",
    tertiary: "text-tertiary",
  }[color];

  const boxSizeClasses = {
    small: "w-3 h-3",
    medium: "w-4 h-4",
    large: "w-5 h-5",
  }[size];

  const textSizeClasses = {
    small: "text-sm",
    medium: "text-base",
    large: "text-lg",
  }[size];

  return (
    <div className={`flex flex-row items-center `}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        value={value}
        className="hidden"
      />
      <div
        className={` p-0.5 rounded-sm cursor-pointer border ${styledClasses} `}
        onClick={handleChange}
        data-value={value}
      >
        <SVGIcon className={`${boxSizeClasses} ${svgStyledClasses}`} />
      </div>
      {label && (
        <label className={`ml-2  ${textColorClasses} ${textSizeClasses}`}>
          {label}
        </label>
      )}
    </div>
  );
};

export default CheckBox;
