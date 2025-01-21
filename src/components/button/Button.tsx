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
  style,
  color,
  size,
  label,
  ...props
}: ButtonProps) => {
  const styledClasses = {
    filled: `bg-${color} text-on_${color}  rounded-full`,
    tonal: `bg-${color}_container text-on_${color}_container  rounded-full`,
    outlined: `border border-${color} text-${color}  rounded-full`,
    text: `text-${color}`,
  }[style || "filled"];

  const sizeClasses = {
    small: "px-6 py-2 text-sm font-medium",
    medium: "px-6 py-2 text-base font-medium",
    large: "px-6 py-2 text-xl font-medium",
  }[size || "small"];

  return (
    <button className={`${styledClasses} ${sizeClasses}`} {...props}>
      {label}
    </button>
  );
};
