import styled from "styled-components";
import useDarkModeStore from "../../stores/useDarkModeStore";
import SunSVG from "./SunSVG";
import MoonSVG from "./MoonSVG";

const ToggleSwitch: React.FC = () => {
  const { isDarkModeOn, toggleDarkMode } = useDarkModeStore();

  return (
    <ToggleWrapper onClick={toggleDarkMode} $isDarkModeOn={isDarkModeOn}>
      <IconWrapper $position="left" $isDarkModeOn={isDarkModeOn}>
        <SunSVG />
      </IconWrapper>
      <ToggleCircle $isDarkModeOn={isDarkModeOn} />
      <IconWrapper $position="right" $isDarkModeOn={isDarkModeOn}>
        <MoonSVG />
      </IconWrapper>
    </ToggleWrapper>
  );
};

export default ToggleSwitch;

interface ToggleProps {
  $isDarkModeOn: boolean;
}

export const ToggleWrapper = styled.div<ToggleProps>`
  width: 60px;
  height: 30px;

  background-color: ${({ $isDarkModeOn }) =>
    $isDarkModeOn ? "var(--leviko-blue)" : "var(--leviko-green)"};
  border-radius: 15px;
  display: flex;
  align-items: center;
  padding: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  border: 3px solid var(--leviko-green);
  position: relative;
`;

export const ToggleCircle = styled.div<ToggleProps>`
  width: 27px;
  height: 27px;
  background-color: ${({ $isDarkModeOn }) =>
    $isDarkModeOn ? "var(--leviko-green)" : "var(--leviko-blue)"};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -1px;
  left: ${({ $isDarkModeOn }) =>
    $isDarkModeOn ? "calc(100% - 26px)" : "-1px"};
  transition: left 0.3s, background-color 0.3s;
  z-index: 2;
`;

export const IconWrapper = styled.div<{
  $position: "left" | "right";
  $isDarkModeOn: boolean;
}>`
  position: absolute;
  top: 57%;
  ${({ $position }) => $position}: 5px;
  transform: translateY(-50%);
  z-index: 1;

  svg {
    width: 20px;
    height: 20px;
    transition: fill 0.3s;
    color: ${({ $position }) =>
      $position === "left"
        ? "var(--leviko-green)" // Sun icon color
        : "var(--leviko-blue)"}; // Moon icon color
  }
`;
