type IconProps = {
  size?: number;
};

export default function TradingIcon({ size = 16 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17V7" />
      <path d="M7 7l-3 3" />
      <path d="M7 7l3 3" />
      <path d="M17 7v10" />
      <path d="M17 17l-3-3" />
      <path d="M17 17l3-3" />
    </svg>
  );
}
