import styled from "styled-components";

export const Headline = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
  text-align: center;

  @media (max-width: 1025px) {
    margin-bottom: 80px;
  }

  @media (max-width: 430px) {
    margin-bottom: 56px;
    padding: 0 24px 0 24px;
  }
`;
