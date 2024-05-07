import styled from "styled-components";

export const Button = styled.a`
  text-align: center;
  text-decoration: none;
  background-color: var(--leviko-blue);
  border-radius: 15px;
  color: var(--leviko-white);
  padding-top: 12px;
  padding-bottom: 12px;
  width: 254px;
  font-size: 24px;

  /* Hover effect */
  &:hover {
    color: var(--leviko-black);
    background-color: var(--leviko-green);
  }

  /* Focus effect */
  &:focus {
    outline: none;
    box-shadow: 10px rgba(170, 254, 131, 0.5);
  }

  /* Active (click) effect */
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
`;
