import { useState } from "react";

interface AlertDialogProps {
  label: string;
  title: string;
  message: string;
  onConfirm: () => void;
  confirmLabel?: string;
  cancelLabel?: string;
  style: "filled" | "tonal" | "outlined" | "text";
  color: "primary" | "secondary" | "tertiary" | "error";
  size?: "small" | "medium" | "large";
}

export const AlertDialog = ({
  label = "label",
  title = "타이틀",
  message = "타이틀 하시겠습니까?",
  onConfirm,
  confirmLabel = "확인",
  cancelLabel = "취소",
  style = "filled",
  color,
  size = "small",
  ...props
}: AlertDialogProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleConfirm = () => {
    onConfirm();
    console.log("Confirmed");
    setIsDialogOpen(false);
  };

  const handleCancel = () => {
    console.log("Cancelled");
    setIsDialogOpen(false);
  };

  const filledColors = {
    primary: "bg-primary text-onPrimary hover:brightness-80",
    secondary: "bg-secondary text-onSecondary hover:brightness-80",
    tertiary: "bg-tertiary text-onTertiary hover:brightness-80",
    error: "bg-error text-onError hover:brightness-80",
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

  const styledClasses =
    {
      filled: filledColors[color],
      tonal: tonalColors[color],
      outlined: outlinedColors[color],
      text: textColors[color],
    }[style] || filledColors["primary"];

  const colorClasses = {
    primary: "bg-primary text-onPrimary",
    secondary: "bg-secondary text-onSecondary",
    tertiary: "bg-tertiary text-onTertiary",
    error: "bg-error text-onError",
  }[color];

  const sizeClasses = {
    small: "px-6 py-2 text-sm font-medium",
    medium: "px-6 py-2 text-base font-medium",
    large: "px-6 py-2 text-xl font-medium",
  }[size];

  return (
    <div className="text-onSurface">
      <button
        className={`${styledClasses} ${sizeClasses} rounded-lg`}
        onClick={() => setIsDialogOpen(true)}
      >
        {label}
      </button>
      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center ">
          <div className="fixed inset-0 bg-scrim" onClick={handleCancel}></div>
          <div className="bg-surfaceBright min-w-2xs max-w-xl rounded-lg shadow-lg p-6 z-50">
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <p className="text-base mb-6">{message}</p>
            <div className="flex justify-end gap-2">
              <button
                className={`px-6 py-2 text-sm font-medium ${colorClasses} rounded-lg hover:brightness-80`}
                onClick={handleConfirm}
                {...props}
              >
                {confirmLabel}
              </button>
              <button
                className="px-6 py-2 text-sm font-medium text-onSurface bg-surfaceDim rounded-lg hover:brightness-80"
                onClick={handleCancel}
              >
                {cancelLabel}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlertDialog;
