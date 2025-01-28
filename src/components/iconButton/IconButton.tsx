import icons from "../../shared/assets/icons";

export interface IconButtonProps {
  /** What style of button? */
  style?: "filled" | "tonal" | "outlined";

  name:
    | "accountCircle"
    | "add"
    | "arrowBack"
    | "arrowFoward"
    | "close"
    | "delete"
    | "done"
    | "edit"
    | "favorite"
    | "favoriteBorder"
    | "home"
    | "menu"
    | "notifications"
    | "search"
    | "settings"
    | "share"
    | "star"
    | "starBorder"
    | "thumbUp";
  color?: "primary" | "secondary" | "tertiary";
  size?: "small" | "medium" | "large";
  /** Optional click handler */
  onClick?: () => void;
}

export const IconButton = ({
  style = "filled",
  name = "accountCircle",
  color = "primary",
  size = "medium",
  ...props
}: IconButtonProps) => {
  const SVGIcon = icons[name];

  const baseColors = {
    primary: "bg-primary fill-onPrimary",
    secondary: "bg-secondary fill-onSecondary",
    tertiary: "bg-tertiary fill-onTertiary",
  };

  const tonalColors = {
    primary: "bg-primaryContainer fill-onPrimaryContainer",
    secondary: "bg-secondaryContainer fill-onSecondaryContainer",
    tertiary: "bg-tertiaryContainer fill-onTertiaryContainer",
  };

  const outlinedColors = {
    primary: "border border-primary fill-primary border-2",
    secondary: "border border-secondary fill-secondary border-2",
    tertiary: "border border-tertiary fill-tertiary border-2",
  };

  const styledClasses =
    {
      filled: baseColors[color],
      tonal: tonalColors[color],
      outlined: outlinedColors[color],
    }[style] || baseColors["primary"];

  const sizeClasses = {
    small: "w-6",
    medium: "w-8",
    large: "w-12",
  }[size || "medium"];
  return (
    <button className={`${sizeClasses}`}>
      <SVGIcon className={` ${styledClasses} rounded-lg p-1`} {...props} />
    </button>
  );
};
