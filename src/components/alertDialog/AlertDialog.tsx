import { useState } from "react";

interface AlertDialogProps {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
  confirmLabel?: string;
  cancelLabel?: string;
}

export const AlertDialog = ({
  title,
  message,
  onConfirm,
  onCancel,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
}: AlertDialogProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleConfirm = () => {
    console.log("Confirmed");
    setIsDialogOpen(false);
  };

  const handleCancel = () => {
    console.log("Cancelled");
    setIsDialogOpen(false);
  };

  return (
    <div>
      <button onClick={() => setIsDialogOpen(true)}>오픈</button>
      {isDialogOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={onCancel}
          ></div>
          <div className="bg-white rounded-lg shadow-lg p-6 z-50">
            <h2 className="text-xl font-semibold mb-4">{title}</h2>
            <p className="mb-6">{message}</p>
            <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                onClick={handleCancel}
              >
                {cancelLabel}
              </button>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={onConfirm}
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
