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

interface StyledArrowProps {
  $rotate?: boolean;
}

interface ProjektAccordionProps {
  items: Array<{
    id: string;
    title: string;
    content: JSX.Element | string;
  }>;
}

const ProjektAccordion: React.FC<ProjektAccordionProps> = ({ items }) => {
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
              {item.title}
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
          <AccordionPanel>{item.content}</AccordionPanel>
        </AccordionContainer>
      ))}
    </AccordionWrapper>
  );
};

export default ProjektAccordion;

const AccordionWrapper = styled(Accordion)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 160px;

  @media (max-width: 1330px) {
    margin-right: 24px;
    margin-left: 24px;
  }

  @media (max-width: 430px) {
    margin-right: 20px;
    margin-right: 20px;
  }
`;

const AccordionContainer = styled(AccordionItem)<{ $alternate: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: start;
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

const AccordionButton = styled(AccordionItemButton)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledArrowSVG = styled(ArrowSVG)`
  &:hover {
    color: var(--leviko-black);
  }
`;

const ArrowContainer = styled.div<StyledArrowProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;

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

const AccordionPanel = styled(AccordionItemPanel)``;
