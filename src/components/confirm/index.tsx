
import React from 'react';

interface ConfirmProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const Confirm = ({
  message,
  onConfirm,
  onCancel
}: ConfirmProps) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <p className="text-lg mb-4">{message}</p>
        <div className="flex justify-end">
          <button onClick={onCancel} className="mr-4 px-4 py-2 bg-gray-300 text-gray-800 rounded-md focus:outline-none">
            Cancel
          </button>
          <button onClick={onConfirm} className="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
