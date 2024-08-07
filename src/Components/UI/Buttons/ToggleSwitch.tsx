import React from "react";
import styled from "styled-components";
import { ChangeEvent, useState } from "react";
import useDarkModeStore from "../../stores/useDarkModeStore";
import SunSVG from "./SunSVG";
import MoonSVG from "./MoonSVG";

const ToggleSwitchWrapper = styled.label`
  margin-top: 9px;
  align-items: center;
  margin-left:20px;
  cursor: pointer;
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
  padding-left:6px;
  padding-top:4px;
  align-items: center;
  position:absolute;
  display:flex;
  gap: 10px;

`;

const StyledSunSVG = styled(SunSVG)`
  transition: 300ms all;
`;

const StyledMoonSVG = styled(MoonSVG)`
  
  
  transition: 300ms all;
`;

const ToggleSwitch = () => {
    
    const {isDarkModeOn,toggleDarkMode} = useDarkModeStore((state) => ({
        isDarkModeOn: state.isDarkModeOn,
        toggleDarkMode: state.toggleDarkMode,
      }));

    return (
        <>
         <ToggleSwitchWrapper>
            <Input checked={isDarkModeOn} type="checkbox" onChange={toggleDarkMode} />
            <Switch>
              <SVGWrapper>
                <StyledSunSVG color={
                    isDarkModeOn 
                      ? "var(--leviko-green)"
                      : "var(--leviko-blue)"
                  } />
                <StyledMoonSVG color={
                    isDarkModeOn 
                      ? "var(--leviko-blue)"
                      : "var(--leviko-green)"
                  } />
              </SVGWrapper>
            </Switch>
        </ToggleSwitchWrapper>
        </>
    )
}

export default ToggleSwitch;
