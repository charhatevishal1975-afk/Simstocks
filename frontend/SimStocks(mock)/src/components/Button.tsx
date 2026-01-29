type ButtonProps = {
  label: string
  icon: React.ReactNode
  variant?: "primary" | "secondary" | "success" | "danger"
}

export default function Button({
  label,
  icon,
  variant = "primary",
}: ButtonProps) {
  const base =
    "flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium"

  const variants = {
    primary: "bg-blue-500 text-white",
    secondary: "bg-white text-black border border-black",
    success: "bg-green-500 text-white",
    danger: "bg-red-500 text-white",
  }

  return (
    <button className={`${base} ${variants[variant]}`}>
      <span className="w-4 h-4">{icon}</span>
      {label}
    </button>
  )
}
