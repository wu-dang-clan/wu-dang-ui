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
  const baseColors = {
    primary: "bg-primary text-onPrimary",
    secondary: "bg-secondary text-onSecondary",
    tertiary: "bg-tertiary text-onTertiary",
    error: "bg-error text-on_error",
  };

  const tonalColors = {
    primary: "bg-primaryContainer text-onPrimaryContainer",
    secondary: "bg-secondaryContainer text-onSecondaryContainer",
    tertiary: "bg-tertiaryContainer text-onTertiaryContainer",
    error: "bg-errorContainer text-on_errorContainer",
  };

  const outlinedColors = {
    primary: "border border-primary text-primary",
    secondary: "border border-secondary text-secondary",
    tertiary: "border border-tertiary text-tertiary",
    error: "border border-error text-error",
  };

  const textColors = {
    primary: "text-primary",
    secondary: "text-secondary",
    tertiary: "text-tertiary",
    error: "text-error",
  };

  // Assign styles based on props
  const styledClasses =
    {
      filled: baseColors[color],
      tonal: tonalColors[color],
      outlined: outlinedColors[color],
      text: textColors[color],
    }[style] || baseColors["primary"];

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
