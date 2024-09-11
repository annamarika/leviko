import styled from "styled-components";

export const MarqueeContainer = styled.div`
  background-color: var(--leviko-blue);
  color: var(--leviko-green);
  padding: 30px 0;
  margin: 100px 0;
  position: relative;

  @media (max-width: 1200px) {
    margin: 80px 0;
    padding: 21px 0;
  }

  @media (max-width: 1024px) {
    margin: 56px 0;
    padding: 26px 0;
  }
`;

export const MarqueeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  gap: 50px;
`;
