export interface BadgeProps {
  style?: "filled" | "tonal" | "outlined";
  color?: "primary" | "secondary" | "tertiary";

  label?: string;
}

export const Badge = ({
  style = "filled",
  color = "primary",
  label,
  ...props
}: BadgeProps) => {
  const baseColors = {
    primary: "bg-primary text-onPrimary",
    secondary: "bg-secondary text-onSecondary",
    tertiary: "bg-tertiary text-onTertiary",
  };

  const tonalColors = {
    primary: "bg-primaryContainer text-onPrimaryContainer",
    secondary: "bg-secondaryContainer text-onSecondaryContainer",
    tertiary: "bg-tertiaryContainer text-onTertiaryContainer",
  };

  const outlinedColors = {
    primary: "border border-primary text-primary",
    secondary: "border border-secondary text-secondary",
    tertiary: "border border-tertiary text-tertiary",
  };

  const styledClasses =
    {
      filled: baseColors[color],
      tonal: tonalColors[color],
      outlined: outlinedColors[color],
    }[style] || baseColors["primary"];

  return (
    <span
      className={` rounded-md px-2 py-1 text-xs font-light ${styledClasses}`}
      {...props}
    >
      {label}
    </span>
  );
};
