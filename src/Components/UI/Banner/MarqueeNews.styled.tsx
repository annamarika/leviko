// MarqueeNews.styled.tsx
import styled from "styled-components";

/**
 * Container for the marquee, setting the background color, padding,
 * and margins, with responsive adjustments for different screen sizes.
 */
export const MarqueeContainer = styled.div`
  background-color: var(--leviko-blue);
  padding: 30px 0;
  margin: 100px 0;
  position: relative;
  gap: 10px;

  @media (max-width: 1200px) {
    margin: 80px 0;
    padding: 21px 0;
  }

  @media (max-width: 1024px) {
    margin: 56px 0;
    padding: 26px 0;
  }
`;

/**
 * Wrapper for the marquee content (logos and event links).
 * Ensures alignment and spacing of the items inside the marquee.
 */
export const MarqueeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  margin-left: 20px;
  gap: 20px;
`;

/**
 * Link container for the event links displayed inside the marquee.
 * Adjusts the font size and color, with no underline for the links.
 */
export const LinkContainer = styled.a`
  color: var(--leviko-green);
  font-size: 24px;
  text-decoration: none;
`;

/**
 * Text container for the paragraph below the marquee. It centers the text
 * and adjusts margins responsively for different screen sizes.
 */
export const TextContainer = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 160px 100px 160px;

  @media (max-width: 1200px) {
    margin: 0 24px 100px 24px;
  }

  @media (max-width: 1024px) {
    margin: 0 24px 80px 24px;
  }

  @media (max-width: 430px) {
    margin: 0 24px 56px 24px;
  }
`;
