
import React from 'react';
import styled from 'styled-components';

const ParallaxContainer = styled.div`
  height: 100vh;
  background-image: url('/path-to-your-image.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  font-weight: bold;
`;

const IntroParallax: React.FC = () => {

  return (
    <ParallaxContainer >
      Welcome to Our Website
    </ParallaxContainer>
  );
};

export default IntroParallax;
