import icons from "../../shared/assets/icons";

export interface CallOutProps {
  style?: "filled" | "tonal" | "outlined";
  color?: "primary" | "secondary" | "tertiary" | "error";
  label: string;
}

export const CallOut = ({
  style = "filled",
  color = "primary",
  label,
}: CallOutProps) => {
  const SVGIcon = icons["info"];

  const filledColors = {
    primary: "bg-primary text-onPrimary",
    secondary: "bg-secondary text-onSecondary",
    tertiary: "bg-tertiary text-onTertiary",
    error: "bg-error text-onError",
  };

  const tonalColors = {
    primary: "bg-primaryContainer text-onPrimaryContainer",
    secondary: "bg-secondaryContainer text-onSecondaryContainer",
    tertiary: "bg-tertiaryContainer text-onTertiaryContainer",
    error: "bg-errorContainer text-onErrorContainer",
  };

  const outlinedColors = {
    primary: "border border-primary text-primary",
    secondary: "border border-secondary text-secondary",
    tertiary: "border border-tertiary text-tertiary",
    error: "border border-error text-error",
  };

  const styledClasses =
    {
      filled: filledColors[color],
      tonal: tonalColors[color],
      outlined: outlinedColors[color],
    }[style] || filledColors["primary"];

  const svgFilledClasses = {
    primary: "fill-onPrimary",
    secondary: "fill-onSecondary",
    tertiary: "fill-onTertiary",
    error: "fill-onError",
  };

  const svgTonalClasses = {
    primary: "fill-onPrimaryContainer",
    secondary: "fill-onSecondaryContainer",
    tertiary: "fill-onTertiaryContainer",
    error: "fill-onErrorContainer",
  };

  const svgOutlinedClasses = {
    primary: "fill-primary",
    secondary: "fill-secondary",
    tertiary: "fill-tertiary",
    error: "fill-error",
  };

  const svgStyledClasses =
    {
      filled: svgFilledClasses[color],
      tonal: svgTonalClasses[color],
      outlined: svgOutlinedClasses[color],
    }[style] || svgFilledClasses["primary"];

  return (
    <div
      className={` ${styledClasses} flex flex-row rounded-lg p-4 w-full gap-2`}
    >
      <SVGIcon className={`w-4 ${svgStyledClasses}`} />
      <p className=" text-sx font-normal">{label}</p>
    </div>
  );
};
