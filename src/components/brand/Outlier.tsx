import type { SVGProps } from "react";

export function Outlier(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 128 128" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22 25 H54 V57 H22 Z M22 73 H54 V105 H22 Z M70 73 H102 V105 H70 Z" />
      <circle cx="92" cy="30" r="15" />
    </svg>
  );
}
