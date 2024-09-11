import styled from "styled-components";

// Wrapper for the entire publication card, which alternates between light and dark based on "isEven" and "dark mode" settings.
export const ParalaxWrapper = styled.div<{
  $isEven: boolean;
  $isDarkModeOn: boolean;
}>`
  background-color: ${({ $isEven, $isDarkModeOn }) =>
    $isEven
      ? "var(--leviko-blue)"
      : $isDarkModeOn
      ? "var(--leviko-black)"
      : "var(--leviko-white)"};

  @media (max-width: 430px) {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
  }
`;

// Main container for the content inside the publication card.
export const ParalaxContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  margin: 0 160px;
  padding: 100px 0;
  gap: 80px;
  color: var(--leviko-white);

  @media (max-width: 1330px) {
    margin-right: 24px;
    margin-left: 24px;
  }

  @media (max-width: 1024px) {
    margin-right: 24px;
    margin-left: 24px;
    padding: 80px 0;
    gap: 80px;
  }

  @media (max-width: 430px) {
    flex-direction: column;
    align-items: start;
    margin-bottom: 0;
    gap: 32px;
    padding: 0 0;
  }
`;

// Container to organize the image and text sections side by side, with reversed order for odd/even layouts.
export const ImageTextContainer = styled.div<{ $isEven: boolean }>`
  display: flex;
  align-items: center;
  gap: 32px;
  flex-direction: ${({ $isEven }) => ($isEven ? "row" : "row-reverse")};
  width: 100%;

  @media (max-width: 1024px) {
    gap: 24px;
  }

  @media (max-width: 430px) {
    flex-direction: column;
    gap: 20px;
  }
`;

// Text section container that adapts based on the layout (even or odd) and dark mode.
export const TextWrapper = styled.div<{
  $isEven: boolean;
  $isDarkModeOn: boolean;
}>`
  color: ${({ $isEven, $isDarkModeOn }) =>
    $isEven
      ? "var(--leviko-white)"
      : $isDarkModeOn
      ? "var(--leviko-white)"
      : "var(--leviko-black)"};
  display: flex;
  flex-direction: column;
  gap: 100px;
  justify-content: start;
  align-items: start;
  width: 50%;

  @media (max-width: 430px) {
    width: 100%;
    gap: 20px;
  }
`;

// Container for the image with defined size and object fit.
export const ImageContainer = styled.div`
  width: 50%;
  height: 80vh;
  overflow: hidden;

  @media (max-width: 430px) {
    width: 100%;
    height: 200px;
  }
`;

interface StyledImageProps {
  $objectPosition?: string;
}

// Styled image with configurable object position.
export const StyledImage = styled.img<StyledImageProps>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
  object-position: ${(props) => props.$objectPosition || "center"};

  @media (max-width: 430px) {
    object-position: ${(props) => props.$objectPosition || "30%"};
  }
`;

// Publication date style.
export const Date = styled.p`
  align-self: flex-end;
`;

// Container for the headline.
export const HeadlineContainer = styled.h3`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  @media (max-width: 430px) {
    width: 100%;
    gap: 20px;
  }
`;

// Container for the main text section, including the description and tags.
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 28px;

  @media (max-width: 1024px) {
    gap: 24px;
  }

  @media (max-width: 430px) {
    gap: 20px;
    width: 100%;
  }
`;

// Container for the tags section.
export const TagContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 10px;
`;

// Individual tag style.
export const Tag = styled.span`
  padding: 8px 16px;
  border: 2px solid var(--leviko-blue);
  border-radius: 50px;
  font-size: 14px;
  color: var(--leviko-blue);
  background-color: var(--leviko-white);
`;
