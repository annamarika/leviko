// ArrowSVGInline.tsx
import React from "react";

interface ArrowSVGInlineProps {
  color: string;
  rotate?: boolean;
}

const ArrowSVGInline: React.FC<ArrowSVGInlineProps> = ({ color }) => (
  <svg
    width="63"
    height="35"
    viewBox="0 0 63 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M62.4961 2.77135C62.4961 2.24225 62.2869 1.70078 61.8809 1.29473C61.0688 0.48262 59.7398 0.48262 58.9277 1.29473L31.1314 29.091L3.74121 1.70078C2.9291 0.888667 1.6002 0.888667 0.788085 1.70078C-0.024026 2.51289 -0.0240261 3.84179 0.788085 4.6539L29.6549 33.533C30.467 34.3451 31.7959 34.3451 32.608 33.533L61.8809 4.26016C62.2992 3.8418 62.4961 3.31276 62.4961 2.77135Z"
      fill={color}
    />
  </svg>
);

export default ArrowSVGInline;
