import styled from "styled-components";
import ArrowSVG from "./ArrowSVG.tsx";

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
