import React, { forwardRef } from "react";
import styled from "styled-components";

interface ParallaxSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  isSticky?: boolean;
}

const StyledParalaxSection = styled.div<{ isSticky?: boolean }>`
  width: 100%;
  z-index: 10;
  position: relative;

  ${(props) =>
    props.isSticky &&
    `
    position: -webkit-sticky;
    position: sticky;
    top: 0;
  `}
`;

// Using forwardRef to allow ref forwarding
const ParallaxSection = forwardRef<HTMLDivElement, ParallaxSectionProps>(
  ({ children, isSticky, className }, ref) => {
    return (
      <StyledParalaxSection ref={ref} isSticky={isSticky} className={className}>
        {children}
      </StyledParalaxSection>
    );
  }
);

export default ParallaxSection;
