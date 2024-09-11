import React, { forwardRef } from "react";
import styled from "styled-components";

interface ParallaxSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const StyledParallaxSection = styled.div`
  width: 100%;
  z-index: 10;
  position: relative;

  &.sticky {
    position: -webkit-sticky; /* For Safari */
    position: sticky;
    top: 0;
  }
`;

// Using forwardRef to allow ref forwarding
const ParallaxSection = forwardRef<HTMLDivElement, ParallaxSectionProps>(
  ({ children, className }, ref) => {
    return (
      <StyledParallaxSection ref={ref} className={className}>
        {children}
      </StyledParallaxSection>
    );
  }
);

export default ParallaxSection;
