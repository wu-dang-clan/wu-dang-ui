import icons from "../shared/assets/icons";

export interface IconProps {
  /** 아이콘 종류 */
  name: "menu";

  /** 아이콘 색상 */
  color: "primary" | "secondary" | "tertiary";

  /** 아이콘 크기 */
  size?: "small" | "medium" | "large";
}

export const Icon = ({ name, color, size, ...props }: IconProps) => {
  const SVGIcon = icons[name];
  const colorClasses = {
    primary: "fill-primary",
    secondary: "fill-secondary",
    tertiary: "fill-tertiary",
  }[color || "primary"];
  const sizeClasses = {
    small: "w-6 ",
    medium: "w-8 ",
    large: "w-12",
  }[size || "medium"];
  return <SVGIcon className={`${sizeClasses} ${colorClasses} `} {...props} />;
};
