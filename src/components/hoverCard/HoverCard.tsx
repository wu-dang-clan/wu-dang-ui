import { useState } from "react";

interface HoverCardProps {
  style: "tonal" | "outlined";
  color: "primary" | "secondary" | "tertiary";
  label: string;
  title: string;
  description?: string;
}

export const HoverCard = ({
  style = "tonal",
  color = "primary",
  label = "hoverCard",
  title = "title",
  description = "description",
}: HoverCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const textColorClasses =
    {
      primary: "text-primary",
      secondary: "text-secondary",
      tertiary: "text-tertiary",
    }[color] || "text-primary";

  const boxTonalColor = {
    primary:
      " border border-primary bg-primaryContainer text-onPrimaryContainer",
    secondary:
      " border border-secondary bg-secondaryContainer text-onSecondaryContainer",
    tertiary:
      " border border-tertiary bg-tertiaryContainer text-onTertiaryContainer",
  };

  const boxOutlinedColor = {
    primary: " border border-primary text-onSurface bg-surface",
    secondary: " border border-secondary text-onSurface bg-surface",
    tertiary: " border border-tertiary text-onSurface bg-surface",
  };

  const styledClasses =
    {
      tonal: boxTonalColor[color],
      outlined: boxOutlinedColor[color],
    }[style] || boxTonalColor["primary"];

  return (
    <div className="relative inline-block">
      <p
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`${textColorClasses} animate-pulse`}
      >
        {label}
      </p>
      {isHovered && (
        <div
          className={`absolute left-0 mt-2 w-64 p-2 ${styledClasses} rounded-lg shadow-lg z-10 `}
        >
          <p className=" text-lg font-medium">{title}</p>
          <p className=" text-sm">{description}</p>
        </div>
      )}
    </div>
  );
};

export default HoverCard;
