export interface ButtonProps {
  /** What style of button? */
  style?: "filled" | "tonal" | "outlined" | "text";
  /** Is this the principal call to action on the page? */
  color?: "primary" | "secondary" | "tertiary" | "error";
  /** How large should the button be? */
  size?: "small" | "medium" | "large";
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

export const Button = ({
  style = "filled",
  color = "primary",
  size = "small",
  label,
  ...props
}: ButtonProps) => {
  // Define all possible styles
  const filledColors = {
    primary: "bg-primary text-onPrimary hover:brightness-80",
    secondary: "bg-secondary text-onSecondary hover:brightness-80",
    tertiary: "bg-tertiary text-onTertiary hover:brightness-80",
    error: "bg-error text-on_error hover:brightness-80",
  };

  const tonalColors = {
    primary: "bg-primaryContainer text-onPrimaryContainer hover:brightness-80",
    secondary:
      "bg-secondaryContainer text-onSecondaryContainer hover:brightness-80",
    tertiary:
      "bg-tertiaryContainer text-onTertiaryContainer hover:brightness-80",
    error: "bg-errorContainer text-on_errorContainer hover:brightness-80",
  };

  const outlinedColors = {
    primary: "border border-primary text-primary hover:brightness-80",
    secondary: "border border-secondary text-secondary hover:brightness-80",
    tertiary: "border border-tertiary text-tertiary hover:brightness-80",
    error: "border border-error text-error hover:brightness-80",
  };

  const textColors = {
    primary: "text-primary hover:brightness-80",
    secondary: "text-secondary hover:brightness-80",
    tertiary: "text-tertiary hover:brightness-80",
    error: "text-error hover:brightness-80",
  };

  // Assign styles based on props
  const styledClasses =
    {
      filled: filledColors[color],
      tonal: tonalColors[color],
      outlined: outlinedColors[color],
      text: textColors[color],
    }[style] || filledColors["primary"];

  const sizeClasses = {
    small: "px-6 py-2 text-sm font-medium",
    medium: "px-6 py-2 text-base font-medium",
    large: "px-6 py-2 text-xl font-medium",
  }[size];

  return (
    <button
      className={`${styledClasses} ${sizeClasses} rounded-full `}
      {...props}
    >
      {label}
    </button>
  );
};
