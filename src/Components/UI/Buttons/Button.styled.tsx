import styled, { css } from "styled-components";

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  $buttonVariant?: "secondary";
}

export const Button = styled.a<ButtonProps>`
  text-align: center;
  text-decoration: none;
  background-color: var(--leviko-blue); // Default background
  border-radius: 15px;
  color: var(--leviko-white); // Default text color
  padding-top: 12px;
  padding-bottom: 12px;
  width: 254px;
  height: 100%;
  font-size: 24px;

  /* Hover effect for default button */
  &:hover {
    color: var(--leviko-black);
    background-color: var(--leviko-green);
  }

  /* Focus effect for default button */
  &:focus {
    outline: none;
    box-shadow: 10px rgba(170, 254, 131, 0.5);
  }

  /* Active (click) effect for default button */
  &:active {
    color: var(--leviko-white);
    background-color: var(--leviko-black);
    border-color: var(--leviko-black);
  }

  @media (max-width: 1024px) {
    width: 181px;
    font-size: 20px;
  }

  @media (max-width: 430px) {
    width: 165px;
    font-size: 18px;
  }

  /* Variant styles */
  ${(props) => {
    console.log("Variant in styled:", props.$buttonVariant); // Additional logging for debugging
    return (
      props.$buttonVariant === "secondary" &&
      css`
        background-color: transparent;
        color: var(--leviko-green);
        border-color: var(--leviko-green);
        border: 3px solid;

        /* Hover effect for default button */
        &:hover {
          background-color: var(--leviko-green);
          color: var(--leviko-black);
          border-color: var(--leviko-green);
        }

        /* Focus effect for default button */
        &:focus {
          outline: none;
          box-shadow: 10px rgba(170, 254, 131, 0.5);
        }

        /* Active (click) effect for default button */
        &:active {
          color: var(--leviko-white);
          background-color: var(--leviko-black);
          border-color: var(--leviko-black);
        }
      `
    );
  }}
`;
