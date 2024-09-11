// MethodenOutro.styled.tsx
import styled from "styled-components";

/**
 * Container for the MethodenOutro component, which sets up
 * the layout and spacing for the description and button.
 * Responsive styles ensure proper alignment on different screen sizes.
 */
export const MethodenIntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-right: 160px;
  margin-left: 160px;
  padding: 50px 0;
  gap: 80px;

  @media (max-width: 1330px) {
    margin-right: 24px;
    margin-left: 24px;
  }

  @media (max-width: 1024px) {
    margin-right: 24px;
    margin-left: 24px;
    gap: 24px;
  }

  @media (max-width: 430px) {
    padding: 0 0;
    flex-direction: column;
    align-items: start;
    gap: 24px;
    margin-bottom: 56px;
  }
`;
