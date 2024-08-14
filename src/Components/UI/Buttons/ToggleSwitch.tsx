import styled from "styled-components";
import useDarkModeStore from "../../stores/useDarkModeStore";
import SunSVG from "./SunSVG";
import MoonSVG from "./MoonSVG";

const ToggleSwitch = () => {
  const { isDarkModeOn, toggleDarkMode } = useDarkModeStore((state) => ({
    isDarkModeOn: state.isDarkModeOn,
    toggleDarkMode: state.toggleDarkMode,
  }));

  return (
    <>
      <ToggleSwitchWrapper>
        <Input
          checked={isDarkModeOn}
          type="checkbox"
          onChange={toggleDarkMode}
        />
        <Switch>
          <SVGWrapper>
            <StyledSunSVG
              color={
                isDarkModeOn ? "var(--leviko-green)" : "var(--leviko-blue)"
              }
            />
            <StyledMoonSVG
              color={
                isDarkModeOn ? "var(--leviko-blue)" : "var(--leviko-green)"
              }
            />
          </SVGWrapper>
        </Switch>
      </ToggleSwitchWrapper>
    </>
  );
};

export default ToggleSwitch;

const ToggleSwitchWrapper = styled.label`
  margin-top: 9px;
  align-items: center;
  margin-left: 20px;
  cursor: pointer;

  @media (max-width: 1024px) {
    margin-top: 6px;
  }
`;

const Switch = styled.div`
  position: relative;
  width: 62px;
  height: 32px;
  background: var(--leviko-blue);
  border-style: solid;
  border-color: var(--leviko-green);
  border-radius: 32px;
  transition: 300ms all;

  &:before {
    transition: 300ms all;
    content: "";
    position: absolute;
    width: 31px;
    height: 29px;
    border-radius: 35px;
    top: 50%;
    background: var(--leviko-green);
    transform: translate(-1px, -50%);
  }
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;

  &:checked + ${Switch} {
    &:before {
      transform: translate(29px, -50%);
    }
  }
`;

const SVGWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 4px;
  position: relative;
  z-index: 1;
`;

const StyledSunSVG = styled(SunSVG)`
  transition: 300ms all;
`;

const StyledMoonSVG = styled(MoonSVG)`
  transition: 300ms all;
`;
