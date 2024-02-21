
import React, { useEffect } from 'react';

export interface ToastProps {
  id: string;
  destroy: () => void;
  title: string;
  content: string;
  duration?: number;
}

const Toast = ({
  id,
  destroy,
  title,
  content,
  duration = 0,
}: ToastProps) => {

  useEffect(() => {
    if (!duration) return;

    const timer = setTimeout(() => {
      destroy();
    }, duration);

    return () => clearTimeout(timer);

  }, [destroy, duration]);

  return (
    <div className="fixed top-10 right-10 z-50 w-80" style={{ animation: 'slideInLeft 0.3s ease, fadeOut 2s ease 2.2s forwards' }}>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex justify-between items-center px-4 py-3 bg-gray-800 text-white">
          <div className="font-bold">{title}</div>
          <button className="text-white hover:text-gray-300 focus:outline-none" onClick={destroy}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="px-4 py-3">
          <div className="text-red-500 font-mono ">{content}</div>
        </div>
      </div>
    </div>

  )
}

export default Toast;