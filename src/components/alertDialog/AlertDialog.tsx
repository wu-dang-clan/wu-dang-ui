import { useState } from "react";

interface AlertDialogProps {
  label: string;
  title: string;
  message: string;
  onConfirm: () => void;
  confirmLabel?: string;
  cancelLabel?: string;
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
    <div>
      <button
        className={`${colorClasses} ${sizeClasses} rounded-lg`}
        onClick={() => setIsDialogOpen(true)}
      >
        {label}
      </button>
      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-scrim" onClick={handleCancel}></div>
          <div className="bg-white rounded-lg shadow-lg p-6 z-50">
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <p className="text-base mb-6">{message}</p>
            <div className="flex justify-end space-x-4">
              <button
                className="px-6 py-2 text-sm font-medium bg-gray-300 rounded-lg hover:bg-gray-400"
                onClick={handleCancel}
              >
                {cancelLabel}
              </button>
              <button
                className={`px-6 py-2 text-sm font-medium ${colorClasses} rounded-lg`}
                onClick={handleConfirm}
                {...props}
              >
                {confirmLabel}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlertDialog;
