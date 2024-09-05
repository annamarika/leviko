import styled from "styled-components";
import { ButtonPdf } from "../UI/Buttons/ButtonPdf.styled";
import { Button } from "../UI/Buttons/Button.styled";
import useDarkModeStore from "../stores/useDarkModeStore";

interface PublikationProps {
  date: string;
  headline: string;
  subHeadline: string;
  imgSrc: string;
  imgAlt: string;
  $objectPosition?: string;
  linkTo: string;
  button: string;
  $buttonVariant?: "secondary" | "tertiary";
  description: JSX.Element | string;
  tags: string[];
  isEven: boolean;
  isPdf?: boolean;
}

interface StyledImageProps {
  $objectPosition?: string;
}

const Publikation: React.FC<PublikationProps> = ({
  date,
  headline,
  subHeadline,
  imgSrc,
  imgAlt,
  $objectPosition = "center",
  linkTo,
  button,
  $buttonVariant,
  description,
  tags,
  isEven,
  isPdf = true, // Default to true for PDF links
}) => {
  const { isDarkModeOn } = useDarkModeStore();

  return (
    <ParalaxWrapper $isDarkModeOn={isDarkModeOn} $isEven={isEven}>
      <ParalaxContainer>
        <ImageTextContainer $isEven={isEven}>
          <ImageContainer>
            <StyledImage
              src={imgSrc}
              alt={imgAlt}
              $objectPosition={$objectPosition}
            />
          </ImageContainer>
          <TextWrapper $isDarkModeOn={isDarkModeOn} $isEven={isEven}>
            <Date>{date}</Date>
            <TextContainer>
              <HeadlineContainer>{headline}</HeadlineContainer>
              <p>{subHeadline}</p>
              <TagContainer>
                {tags.map((tag, index) => (
                  <Tag key={index}>{tag}</Tag>
                ))}
              </TagContainer>
              <div>{description}</div>
            </TextContainer>
            {/* Conditional rendering of ButtonPdf or Button */}
            {isPdf ? (
              <ButtonPdf
                href={linkTo}
                target="_blank"
                rel="noopener noreferrer"
                $buttonVariant={
                  !isEven ? undefined : $buttonVariant || "secondary"
                }
              >
                {button}
              </ButtonPdf>
            ) : (
              <Button
                to={linkTo}
                $buttonVariant={
                  isEven ? $buttonVariant || "secondary" : undefined
                }
              >
                {button}
              </Button>
            )}
          </TextWrapper>
        </ImageTextContainer>
      </ParalaxContainer>
    </ParalaxWrapper>
  );
};

export default Publikation;

// Styled Components

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
  width: 50%; /* Nimmt 50% des verfügbaren Platzes ein */

  @media (max-width: 1024px) {
  }

  @media (max-width: 430px) {
    width: 100%;
    gap: 20px;
  }
`;

export const ImageContainer = styled.div`
  width: 50%; /* Bildcontainer nimmt 50% des Platzes in der Flexbox ein */
  height: 80vh; /* Feste Höhe */
  overflow: hidden; /* Bild wird zugeschnitten, wenn es größer ist */

  @media (max-width: 430px) {
    width: 100%;
    height: 200px;
  }
`;

export const StyledImage = styled.img<StyledImageProps>`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Bild wird auf die Größe des Containers zugeschnitten */
  filter: grayscale(100%); /* Schwarz-Weiß-Filter */
  object-position: ${(props) => props.$objectPosition || "center"};

  @media (max-width: 430px) {
    object-position: ${(props) => props.$objectPosition || "30%"};
  }
`;

export const Date = styled.p`
  align-self: flex-end;
`;

export const HeadlineContainer = styled.h3`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;

  @media (max-width: 1024px) {
  }

  @media (max-width: 430px) {
    width: 100%;
    gap: 20px;
  }
`;

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

export const TagContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export const Tag = styled.span`
  padding: 8px 16px;
  border: 2px solid var(--leviko-blue);
  border-radius: 50px;
  font-size: 14px;
  color: var(--leviko-blue);
  background-color: var(--leviko-white);
`;
