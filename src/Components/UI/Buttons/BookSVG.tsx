import React from "react";

interface BookSVGProps {
  color: string;
  className?: string;
}

const BookSVG: React.FC<BookSVGProps> = ({ color, className }) => (
  <svg
    className={className}
    width="224"
    height="224"
    viewBox="0 0 224 224"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M43.8673 57.9413C34.792 57.9413 28.0007 65.1897 28.0007 72.8747V155.008C28.0007 162.693 34.792 169.941 43.8673 169.941H112.001C117.155 169.941 121.334 174.12 121.334 179.275C121.334 184.429 117.155 188.608 112.001 188.608H43.8673C24.9427 188.608 9.33398 173.456 9.33398 155.008V72.8747C9.33398 54.4263 24.9427 39.2747 43.8673 39.2747H69.0673C98.2162 39.2747 121.334 61.8513 121.334 89.6747C121.334 94.8294 117.155 99.0079 112.001 99.0079C106.846 99.0079 102.667 94.8294 102.667 89.6747C102.667 72.698 88.4521 57.9413 69.0673 57.9413H43.8673Z"
      fill={color}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M153.999 57.9413C135.684 57.9413 121.333 72.5652 121.333 89.6747V155.008C121.333 160.163 117.154 164.341 111.999 164.341C106.845 164.341 102.666 160.163 102.666 155.008V89.6747C102.666 61.9841 125.648 39.2747 153.999 39.2747H179.199C198.83 39.2747 214.666 54.208 214.666 72.8747V155.008C214.666 173.456 199.057 188.608 180.133 188.608H111.999C106.845 188.608 102.666 184.429 102.666 179.275C102.666 174.12 106.845 169.941 111.999 169.941H180.133C189.208 169.941 195.999 162.693 195.999 155.008V72.8747C195.999 65.408 189.435 57.9413 179.199 57.9413H153.999Z"
      fill={color}
    />
  </svg>
);

export default BookSVG;