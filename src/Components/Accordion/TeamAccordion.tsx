import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import styled from "styled-components";
import ArrowSVG from "../UI/Buttons/ArrowSVG.tsx";
import useAccordionStore from "../stores/AccordionStore.tsx";
import { Button } from "../UI/Buttons/Button.styled";

interface StyledArrowProps {
  $rotate?: boolean;
}

interface TeamAccordionProps {
  items: Array<{
    id: string;
    title: JSX.Element | string;
    description: string;
    logoOne: string;
    logoTwo: string;
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

interface StyledImageProps {
  $objectPosition?: string;
}

const TeamAccordion: React.FC<TeamAccordionProps> = ({ items }) => {
  const { expanded, setExpanded } = useAccordionStore();

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
                    <StyledImage src={item.logoOne} alt={item.altLogoOne} />
                  </ImageContainer>
                  <ImageContainer $hide={item.logoTwo === ""}>
                    <StyledImage src={item.logoTwo} alt={item.altLogoTwo} />
                  </ImageContainer>
                </LogoContainer>
              </HeadlineWrapper>
              <ArrowContainer $rotate={expanded === item.id}>
                <StyledArrowSVG
                  color={
                    index % 2 !== 0
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

const AccordionWrapper = styled(Accordion)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 160px 100px 160px;

  @media (max-width: 1330px) {
    margin: 0 24px 100px 24px;
  }

  @media (max-width: 1024px) {
    margin: 0 24px 80px 24px;
  }
  @media (max-width: 430px) {
    margin: 0 20px 56px 20px;
  }
`;

const AccordionContainer = styled(AccordionItem)<{ $alternate: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  padding: 65px;
  border: solid 4px;
  border-color: var(--leviko-blue);
  background-color: ${({ $alternate }) =>
    $alternate ? "var(--leviko-white)" : "var(--leviko-blue)"};
  color: ${({ $alternate }) =>
    $alternate ? "var(--leviko-black)" : "var(--leviko-white)"};
  width: 100%;
  gap: 100px;

  @media (max-width: 1024px) {
    gap: 40px;
    padding: 40px 24px;
  }
  @media (max-width: 430px) {
    gap: 32px;
    padding: 32px 24px;
  }
`;

const AccordionButton = styled(AccordionItemButton)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 430px) {
    gap: 20px;
    flex-direction: row;
    align-items: center;
  }
`;

const HeadlineWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 430px) {
    flex-direction: column;
    align-items: start;
    gap: 20px;
  }
`;

const HeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 43px;
  align-items: start;
  width: 50%;

  @media (max-width: 430px) {
    width: 100%;
    gap: 20px;
  }
`;

const AccordionHeading = styled(AccordionItemHeading)`
  font-size: 43px;
  width: 100%;

  @media (max-width: 1024px) {
    font-size: 30px;
  }
  @media (max-width: 430px) {
    font-size: 20px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 43px;
  width: 50%;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    flex-direction: row;
    gap: 20px;
  }

  @media (max-width: 430px) {
    justify-content: start;
    width: 100%;
  }
`;

export const StyledImage = styled.img`
  width: 154px;
  height: auto;
  margin: 0 20px;

  @media (max-width: 1024px) {
    width: 100px;
  }

  @media (max-width: 430px) {
    width: 60px;
    margin: 0 20px 0 0;
  }
`;

export const ImageContainer = styled.div<{ $hide?: boolean }>`
  ${({ $hide }) => $hide && "display: none;"}
`;

const ArrowContainer = styled.div<StyledArrowProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  flex-shrink: 0;

  transform: ${({ $rotate }) => ($rotate ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease;

  @media (max-width: 1024px) {
    width: 40px;
    height: 40px;
  }
  @media (max-width: 430px) {
    width: 30px;
    height: 30px;
  }
`;

const StyledArrowSVG = styled(ArrowSVG)`
  width: 100%;

  &:hover {
    color: var(--leviko-black);
  }
`;

const AccordionPanel = styled.div`
  display: flex;
  align-items: start;
  gap: 20px;

  @media (max-width: 430px) {
    flex-direction: column;
  }
`;

export const ProfilImageContainer = styled.div`
  width: 50%;
  aspect-ratio: 1/1;
  overflow: hidden;

  @media (max-width: 430px) {
    width: 100%;
  }
`;

export const ProfileStyledImage = styled.img<StyledImageProps>`
  width: 100%;
  aspect-ratio: 1/1;
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
  object-position: center
    ${({ $objectPosition }) => $objectPosition || "center"};
`;

export const TextContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 1024px) {
  }

  @media (max-width: 430px) {
    width: 100%;
  }
`;

export const ButtonContainer = styled.div`
  height: auto;
  width: auto;
`;
