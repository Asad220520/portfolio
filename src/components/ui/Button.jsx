function Button({
  as = "button",
  children,
  className = "",
  variant = "primary",
  ...props
}) {
  const Tag = as;

  const base =
    "inline-block px-4 py-2 rounded font-medium transition-colors duration-200";
  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600",
    secondary:
      "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
  };

  return (
    <Tag className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  );
}

export default Button;
