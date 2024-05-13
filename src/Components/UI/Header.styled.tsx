// HeaderStyles.ts
import styled from "styled-components";
import LogoSVG from "../../assets/logo.svg?react";
import ArrowSVG from "./Buttons/ArrowSVG.tsx";

interface MenuIconProps {
  $isOpen: boolean;
}

interface OverlayProps {
  $isOpen: boolean;
}

interface HeaderContainerProps {
  $visible: boolean;
}

export const HeaderContainer = styled.div<HeaderContainerProps>`
  background: var(--leviko-blue);
  width: 100vw;
  position: fixed;
  left: 0;
  right: 0;
  padding-top: 24px;
  padding-bottom: 24px;
  z-index: 100;
  top: ${({ $visible }) => ($visible ? "0" : "-100px")};
  transition: top 0.3s;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 160px;
  margin-left: 160px;

  @media (max-width: 1330px) {
    margin-right: 24px;
    margin-left: 24px;
  }

  @media (max-width: 1024px) {
    margin-right: 24px;
    margin-left: 24px;
  }
`;

export const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  width: 197px;
  height: 43px;
  z-index: 100;

  @media (max-width: 1024px) {
    width: 178px;
    height: 40px;
  }
  @media (max-width: 430px) {
    width: 165px;
    height: 36px;
  }
`;

export const StyledLogoSVG = styled(LogoSVG)`
  max-width: none;
  max-height: none;
  width: 100%;
  height: auto;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 14px;
`;

export const ButtonContainerDisplay = styled.div`
  display: none;

  @media (min-width: 1025px) {
    display: flex;
    gap: 14px;
  }
`;

export const HeaderButton = styled.a`
  text-align: center;
  text-decoration: none;
  background-color: var(--leviko-blue);
  border: solid 4px;
  border-radius: 15px;
  border-color: var(--leviko-green);
  color: var(--leviko-green);
  padding-top: 12px;
  padding-bottom: 12px;
  width: 154px;
  font-size: 20px;

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
`;

export const MenuIcon = styled.div<MenuIconProps>`
  width: 49px;
  height: 24px;
  cursor: pointer;
  position: relative;
  display: none;
  z-index: 100;

  @media (max-width: 1024px) {
    display: block;
  }

  .line.middle {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: var(--leviko-green);
    top: 50%;
    transform: translateY(-50%);
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
    opacity: ${({ $isOpen }) => ($isOpen ? 0 : 1)};
  }

  // Top line, transforms into top part of the X when open
  &::before {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: var(--leviko-green);
    transition: transform 0.3s ease-in-out;
    top: 0;
    transform: ${({ $isOpen }) =>
      $isOpen ? "translateY(260%) rotate(45deg)" : "translateY(0)"};
  }

  // Additional pseudo-element for the bottom line
  &::after {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 4px;
    border-radius: 2px;
    background-color: var(--leviko-green);
    transition: transform 0.3s ease-in-out;
    bottom: 0;
    transform: ${({ $isOpen }) =>
      $isOpen ? "translateY(-210%) rotate(-45deg)" : "translateY(0)"};
  }
`;

export const Overlay = styled.div<OverlayProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--leviko-blue);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  pointer-events: ${({ $isOpen }) => ($isOpen ? "auto" : "none")};
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  transform: ${({ $isOpen }) =>
    $isOpen ? "translateY(0)" : "translateY(-100%)"};

  @media (max-width: 430px) {
    align-items: flex-start;
    padding-top: 120px;
  }
`;

export const OverlayContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  width: 100vw;
`;

export const OverlayContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0;
  border-bottom: solid 4px;
  border-color: var(--leviko-green);

  &:last-child {
    border-bottom: none;
  }

  /* Hover effect */
  &:hover {
    background-color: var(--leviko-green);
    margin: 0 -30px;
    border: none;
  }

  /* Focus effect */
  &:focus {
    box-shadow: 10px rgba(170, 254, 131, 0.5);
  }

  /* Active (click) effect */
  &:active {
    background-color: var(--leviko-black);
    border-color: var(--leviko-black);
  }
`;

export const MenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--leviko-green);
  font-size: 30px;
  text-decoration: none;

  &:hover {
    color: var(--leviko-black);
    margin: 0 30px;
  }

  &:focus {
    color: var(--leviko-black);
  }

  &:active {
    color: var(--leviko-white);
  }
`;

export const StyledArrowSVG = styled(ArrowSVG)`
  &:hover {
    color: var(--leviko-black);
  }
`;

export const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;

  ${StyledArrowSVG} {
    transition: color 0.3s ease; // Ensure smooth color transition
    color: var(--leviko-green); // Default fill color
  }

  &:hover ${StyledArrowSVG} {
    color: var(--leviko-black); // Fill color on hover
  }
`;
