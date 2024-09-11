import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import React from "react";
import {
  AccordionWrapper,
  AccordionContainer,
  AccordionHeading,
  AccordionButton,
  HeadlineWrapper,
  HeadlineContainer,
  LogoContainer,
  ImageContainer,
  StyledImage,
  ArrowContainer,
  StyledArrowSVG,
  AccordionPanel,
  ProfilImageContainer,
  ProfileStyledImage,
  TextContainer,
  ButtonContainer,
} from "../UI/Accordion/TeamAccordion.styled.tsx";
import useAccordionStore from "../stores/useAccordionStore.tsx";
import useDarkModeStore from "../stores/useDarkModeStore.tsx";
import { Button } from "../UI/Buttons/Button.styled";

/**
 * TeamAccordion component.
 * Displays an accordion with team member details.
 *
 * @param {Array} items - Array of accordion items, each with title, description, logos, and content.
 */
interface TeamAccordionProps {
  items: Array<{
    id: string;
    title: JSX.Element | string;
    description: string;
    logoOne: string;
    logoOneDarkMode?: string;
    logoTwo: string;
    logoTwoDarkMode?: string;
    altLogoOne: string;
    altLogoTwo: string;
    content: JSX.Element | string;
    $objectPosition?: string;
    imgAlt: string;
    imgSrc: string;
    linkTo: string;
    button: string;
    $buttonVariant?: "secondary" | "tertiary";
  }>;
}

const TeamAccordion: React.FC<TeamAccordionProps> = ({ items }) => {
  const { expanded, setExpanded } = useAccordionStore(); // Zustand store for accordion state
  const { isDarkModeOn } = useDarkModeStore(); // Zustand store for dark mode state

  // Handle accordion state change
  const handleAccordionChange = (keys: string[]) => {
    const isExpanded = keys.length > 0 ? keys[0] : null;
    setExpanded(isExpanded);
  };

  return (
    <AccordionWrapper allowZeroExpanded onChange={handleAccordionChange}>
      {items.map((item, index) => (
        <AccordionContainer
          key={item.id}
          uuid={item.id}
          $alternate={index % 2 !== 0}
          $isDarkModeOn={isDarkModeOn}
        >
          <AccordionHeading>
            <AccordionButton>
              <HeadlineWrapper>
                <HeadlineContainer>
                  {item.title}
                  <p>{item.description}</p>
                </HeadlineContainer>
                <LogoContainer>
                  <ImageContainer>
                    <StyledImage
                      src={
                        isDarkModeOn && item.logoOneDarkMode
                          ? item.logoOneDarkMode
                          : item.logoOne
                      }
                      alt={item.altLogoOne}
                    />
                  </ImageContainer>
                  <ImageContainer $hide={item.logoTwo === ""}>
                    <StyledImage
                      src={
                        isDarkModeOn && item.logoTwoDarkMode
                          ? item.logoTwoDarkMode
                          : item.logoTwo
                      }
                      alt={item.altLogoTwo}
                    />
                  </ImageContainer>
                </LogoContainer>
              </HeadlineWrapper>
              <ArrowContainer $rotate={expanded === item.id}>
                <StyledArrowSVG
                  color={
                    index % 2 !== 0 && !isDarkModeOn
                      ? "var(--leviko-black)"
                      : "var(--leviko-white)"
                  }
                />
              </ArrowContainer>
            </AccordionButton>
          </AccordionHeading>
          <AccordionItemPanel>
            <AccordionPanel>
              <ProfilImageContainer>
                <ProfileStyledImage
                  $objectPosition={item.$objectPosition}
                  src={item.imgSrc}
                  alt={item.imgAlt}
                />
              </ProfilImageContainer>
              <TextContainer>
                {item.content}
                <ButtonContainer>
                  <Button to={item.linkTo} $buttonVariant={item.$buttonVariant}>
                    {item.button}
                  </Button>
                </ButtonContainer>
              </TextContainer>
            </AccordionPanel>
          </AccordionItemPanel>
        </AccordionContainer>
      ))}
    </AccordionWrapper>
  );
};

export default TeamAccordion;
