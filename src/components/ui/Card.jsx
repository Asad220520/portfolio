// components/ui/Card.jsx
function Card({ children, className }) {
  return (
    <div
      className={clsx(
        "bg-white dark:bg-gray-800 p-4 rounded-lg shadow",
        className
      )}
    >
      {children}
    </div>
  );
}

export default Card;
