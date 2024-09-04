import styled, { css } from "styled-components";

interface ButtonPdfProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  $buttonVariant?: "secondary" | "tertiary";
}

export const ButtonPdf = styled.a<ButtonPdfProps>`
  text-align: center;
  text-decoration: none;
  display: block;
  background-color: var(--leviko-blue); // Default background
  border-radius: 15px;
  color: var(--leviko-white); // Default text color
  padding-top: 12px;
  padding-bottom: 12px;
  width: 254px;
  height: 100%;
  font-size: 24px;
  z-index: 50;

  @media (max-width: 1024px) {
    z-index: 0;
  }

  &:hover {
    color: var(--leviko-black);
    background-color: var(--leviko-green);
  }

  &:focus {
    outline: none;
    box-shadow: 10px rgba(170, 254, 131, 0.5);
  }

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

  ${(props) => {
    return (
      props.$buttonVariant === "secondary" &&
      css`
        background-color: transparent;
        color: var(--leviko-green);
        border-color: var(--leviko-green);
        border: 3px solid;

        &:hover {
          background-color: var(--leviko-green);
          color: var(--leviko-black);
          border-color: var(--leviko-green);
        }

        &:focus {
          outline: none;
          box-shadow: 10px rgba(170, 254, 131, 0.5);
        }

        &:active {
          color: var(--leviko-white);
          background-color: var(--leviko-black);
        }
      `
    );
  }}

  ${(props) => {
    return (
      props.$buttonVariant === "tertiary" &&
      css`
        background-color: transparent;
        color: var(--leviko-blue);
        border-color: var(--leviko-blue);
        border: 3px solid;

        &:hover {
          background-color: var(--leviko-blue);
          color: var(--leviko-white);
        }

        &:focus {
          outline: none;
          box-shadow: 10px rgba(#182ec0, 0.5);
        }

        &:active {
          color: var(--leviko-white);
          background-color: var(--leviko-black);
        }
      `
    );
  }}
`;
