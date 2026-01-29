type IconProps = {
  size?: number;
};

export default function ProfileIcon({ size = 16 }: IconProps) {
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
      <circle cx="12" cy="8" r="4" />
      <path d="M4 22c0-4 4-6 8-6s8 2 8 6" />
    </svg>
  );
}
