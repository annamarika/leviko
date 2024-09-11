import React from "react";
import { ButtonPdf } from "../UI/Buttons/ButtonPdf.styled";
import { Button } from "../UI/Buttons/Button.styled";
import useDarkModeStore from "../stores/useDarkModeStore";

// Import styled-components from the separate file
import {
  ParalaxWrapper,
  ParalaxContainer,
  ImageTextContainer,
  ImageContainer,
  StyledImage,
  TextWrapper,
  Date,
  HeadlineContainer,
  TextContainer,
  TagContainer,
  Tag,
} from "../UI/Publikationen/Publikation.styled.tsx";

/**
 * Publikation component
 *
 * Renders a publication card with an image, text, tags, and a button (either PDF or a normal link button).
 */
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
  isPdf = true, // Default is true for PDF links
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
            {/* Conditionally rendering either ButtonPdf or Button */}
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
