interface St2WLogoProps {
  size?: number;
  className?: string;
  variant?: "icon" | "full";
}

export default function St2WLogo({ size = 48, className = "", variant = "icon" }: St2WLogoProps) {
  if (variant === "full") {
    return (
      <svg
        width={size}
        height={Math.round(size * 1.2)}
        viewBox="0 0 200 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        {/* Bar 1 - short */}
        <rect x="62" y="72" width="20" height="46" rx="3" fill="#C8A84B" opacity="0.9"/>
        {/* Bar 2 - medium */}
        <rect x="90" y="52" width="20" height="66" rx="3" fill="#C8A84B"/>
        {/* Bar 3 - tall */}
        <rect x="118" y="30" width="20" height="88" rx="3" fill="#C8A84B" opacity="0.9"/>

        {/* Trend arrow line with zigzag */}
        <path
          d="M42 100 L68 76 L88 86 L130 32"
          stroke="#D4A93C"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Arrow head */}
        <path
          d="M114 26 L132 32 L126 48"
          stroke="#D4A93C"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* "St2W" text */}
        <text
          x="100"
          y="160"
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="62"
          fill="white"
          opacity="0.95"
          letterSpacing="-2"
        >
          St2W
        </text>

        {/* "SHORT-TERM TO WEALTH" */}
        <text
          x="100"
          y="192"
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="600"
          fontSize="16"
          fill="#C8A84B"
          letterSpacing="3"
        >
          SHORT-TERM TO WEALTH
        </text>
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Bar 1 */}
      <rect x="22" y="52" width="15" height="36" rx="2" fill="#C8A84B" opacity="0.9"/>
      {/* Bar 2 */}
      <rect x="43" y="36" width="15" height="52" rx="2" fill="#C8A84B"/>
      {/* Bar 3 */}
      <rect x="64" y="20" width="15" height="68" rx="2" fill="#C8A84B" opacity="0.9"/>

      {/* Trend arrow */}
      <path
        d="M12 74 L30 56 L48 64 L80 22"
        stroke="#D4A93C"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Arrowhead */}
      <path
        d="M68 16 L80 22 L74 34"
        stroke="#D4A93C"
        strokeWidth="5.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}
