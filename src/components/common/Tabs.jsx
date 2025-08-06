import { useState } from "react";

export default function Tabs({ tabs, onChange, className }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (i) => {
    setActiveIndex(i);
    onChange?.(i);
  };

  return (
    <div className={`flex border-b ${className}`}>
      {tabs.map((tab, i) => (
        <button
          key={i}
          onClick={() => handleClick(i)}
          className={`py-2 px-4 -mb-px font-medium border-b-2 ${
            i === activeIndex
              ? "border-blue-600 text-blue-600"
              : "border-transparent hover:text-blue-600"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
