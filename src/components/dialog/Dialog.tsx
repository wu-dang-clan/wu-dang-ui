import { useState } from "react";

export interface DialogProps {
  /** What style of button? */
  style?: "filled" | "tonal" | "outlined";

  color?: "primary" | "secondary" | "tertiary";

  content: React.ReactNode;
  /** Optional click handler */
  onClick?: () => void;
}

export const Dialog = ({
  style = "filled",
  color = "primary",
  content,
  ...props
}: DialogProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpen = () => {
    setIsDialogOpen(true);
  };

  const handleClose = () => {
    setIsDialogOpen(false);
  };

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
    <div>
      <button className={`${styledClasses}`} onClick={handleOpen}>
        open
      </button>
      {isDialogOpen && (
        <div>
          {content}
          <button onClick={handleClose}>닫기</button>
        </div>
      )}
    </div>
  );
};

export default Dialog;
