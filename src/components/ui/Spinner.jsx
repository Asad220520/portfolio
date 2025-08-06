export default function Spinner({ size = 6, color = "blue" }) {
  return (
    <div
      className={`animate-spin rounded-full border-4 border-t-${color}-500 border-gray-200`}
      style={{ width: `${size}rem`, height: `${size}rem` }}
    ></div>
  );
}
