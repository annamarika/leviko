// ArrowSVG.tsx
import React from "react";

interface ArrowSVGProps {
  style?: React.CSSProperties; // Defines the type for style object
}

const ArrowSVG: React.FC<ArrowSVGProps> = ({ style }) => (
  <svg viewBox="0 0 44 44" xmlns="http://www.w3.org/2000/svg" style={style}>
    <g clipPath="url(#a)">
      <path
        d="M11.713.353a1.463 1.463 0 0 0-1.031 2.492l19.413 19.413-19.13 19.13a1.463 1.463 0 0 0 0 2.062 1.463 1.463 0 0 0 2.063 0l20.17-20.16a1.463 1.463 0 0 0 0-2.063L12.753.782a1.45 1.45 0 0 0-1.04-.43Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="rotate(90 22 22)" d="M0 0h44v44H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default ArrowSVG;
