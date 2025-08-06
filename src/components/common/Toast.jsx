import { useEffect } from "react";

export default function Toast({ message, duration = 3000, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => onClose?.(), duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="fixed bottom-5 right-5 bg-gray-800 text-white px-4 py-2 rounded shadow-lg">
      {message}
    </div>
  );
}
