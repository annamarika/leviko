// ArrowSVGInline.tsx
import { forwardRef, Ref } from "react";

const DBRSVG = forwardRef((props, ref: Ref<SVGSVGElement>) => {
  return (
    <svg
      ref={ref}
      viewBox="0 0 1065 337"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M386.491 150.09C404.361 162.654 440.103 198.308 440.103 240.418C440.103 293.055 394.939 326.197 354.324 326.197C313.709 326.197 269.52 294.68 269.52 240.418C269.52 186.156 328.655 155.939 354.324 141.967C379.992 127.995 436.529 108.825 516.459 108.825C596.389 108.825 662.023 122.797 694.19 131.895"
        stroke="url(#paint0_linear_418_880)"
        strokeWidth="20"
        className="animated-path"
      />
      <path
        d="M5.03516 162.762C42.9425 144.35 138.837 107.525 219.158 107.525C299.478 107.525 335.587 121.389 343.602 128.32"
        stroke="#182EC0"
        strokeWidth="20"
        className="animated-path"
      />

      <path
        d="M641.879 217.998C641.879 164.711 704.589 80.5571 828.058 20.7717"
        stroke="black"
        strokeWidth="5"
        className="animated-path"
      />

      <path
        d="M754.301 150.09C772.172 162.654 807.913 198.308 807.913 240.418C807.913 293.055 762.749 326.197 722.134 326.197C681.519 326.197 637.33 294.68 637.33 240.418C637.33 186.156 696.466 155.939 722.134 141.967C747.803 127.995 804.339 108.825 884.269 108.825C964.2 108.825 1029.83 122.797 1062 131.895"
        stroke="#B4CEE6"
        strokeWidth="20"
        className="animated-path"
      />
      <path
        d="M277.967 215.724C277.967 162.437 340.676 78.2826 464.146 18.4973"
        stroke="black"
        strokeWidth="5"
        className="animated-path"
      />

      <path
        d="M18.6816 1.76392C31.2452 28.7323 75.8026 82.6691 153.524 82.6691"
        stroke="black"
        strokeWidth="5"
        className="animated-path"
      />

      <defs>
        <linearGradient
          id="paint0_linear_418_880"
          x1="578.519"
          y1="131.895"
          x2="403.387"
          y2="161.787"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B4CEE6" />
          <stop offset="1" stopColor="#182EC0" />
        </linearGradient>
      </defs>
    </svg>
  );
});

export default DBRSVG;
