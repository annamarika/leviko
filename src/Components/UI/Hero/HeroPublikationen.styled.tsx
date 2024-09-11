import styled from "styled-components";

// Container for the entire hero section
export const HeroStartseiteContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 48px;
  margin-right: 160px;
  margin-left: 160px;
  margin-top: 50px;
  padding-top: 100px;
  height: 100vh;

  @media (max-width: 1330px) {
    margin-right: 24px;
    margin-left: 24px;
  }

  @media (max-width: 1024px) {
    margin-top: 80px;
    margin-right: 24px;
    margin-left: 24px;
    padding-top: 80px;
    gap: 24px;
  }

  @media (max-width: 430px) {
    margin-top: 0;
    padding-top: 56px;
    flex-direction: column;
    align-items: start;
    gap: 0;
    height: 100vh;
    margin-bottom: 0;
  }
`;

// Headline and description container
export const HeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
  width: 100%;

  @media (max-width: 1024px) {
    gap: 24px;
  }

  @media (max-width: 430px) {
    gap: 20px;
    margin-bottom: 32px;
    width: 100%;
  }
`;

// Search bar container with dynamic styling for dark mode
export const SearchBarContainer = styled.div<{ $isDarkModeOn: boolean }>`
  display: flex;
  align-items: center;
  border: ${({ $isDarkModeOn }) =>
    $isDarkModeOn
      ? "3px solid var(--leviko-green)"
      : "3px solid var(--leviko-blue)"};
  border-radius: 50px;
  width: 50%;
  padding: 20px 20px;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 430px) {
    padding: 10px 20px;
  }
`;

// Input field with dynamic styling for dark mode
export const SearchInput = styled.input<{ $isDarkModeOn: boolean }>`
  border: none;
  outline: none;
  flex-grow: 1;
  font-family: Blatant;
  font-size: 18px;
  color: ${({ $isDarkModeOn }) =>
    $isDarkModeOn ? "var(--leviko-green)" : "var(--leviko-blue)"};
  background-color: transparent;

  &::placeholder {
    color: ${({ $isDarkModeOn }) =>
      $isDarkModeOn ? "var(--leviko-green)" : "var(--leviko-blue)"};
  }

  &:focus::placeholder {
    color: transparent;
  }
`;

// Container for the tag suggestions and "no tag found" text
export const TagTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
  margin-top: -30px;

  @media (max-width: 1024px) {
    margin-top: 0;
  }

  @media (max-width: 430px) {
    margin-top: 20px;
  }
`;

// Tag text with dynamic dark mode color
export const TagText = styled.p<{ $isDarkModeOn: boolean }>`
  color: ${({ $isDarkModeOn }) =>
    $isDarkModeOn ? "var(--leviko-green)" : "var(--leviko-blue)"};
  font-size: 16px;
`;

// Placeholder for when no tag is found
export const NoTagFound = styled.span<{ $isDarkModeOn: boolean }>`
  padding: 8px 16px;
  border: ${({ $isDarkModeOn }) =>
    $isDarkModeOn
      ? "2px solid var(--leviko-green)"
      : "2px solid var(--leviko-blue)"};
  border-radius: 50px;
  font-size: 14px;
  color: ${({ $isDarkModeOn }) =>
    $isDarkModeOn ? "var(--leviko-black)" : "var(--leviko-blue)"};
  background-color: var(--leviko-white);
  cursor: default;
  opacity: 0.6;
`;

// Container for tag suggestions
export const TagSuggestionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

// Individual tag suggestion
export const TagSuggestion = styled.span`
  padding: 8px 16px;
  border: 2px solid var(--leviko-blue);
  border-radius: 50px;
  font-size: 14px;
  color: var(--leviko-blue);
  background-color: var(--leviko-white);
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: var(--leviko-blue);
    color: var(--leviko-white);
  }
`;
