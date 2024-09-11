import React from "react";
import TPACKSVG from "../UI/SVG/TPACKsvg";
import { useTPACKStore } from "../stores/useTPACKStore";
import {
  DiagrammWrapper,
  TPACKDiagrammWrapper,
  DiagrammContainer,
  InfoWrapper,
  InfoContainer,
  InfoTextWrapper,
  InfoTextContainer,
  VerticalText,
} from "../UI/Diagramme/TPACKDiagramm.styled.tsx";

// Funktionale Komponente für das TPACK-Diagramm
const TPACKDiagramm: React.FC = () => {
  const { headline, description } = useTPACKStore();

  return (
    <DiagrammWrapper>
      <TPACKDiagrammWrapper>
        <DiagrammContainer>
          <TPACKSVG />
        </DiagrammContainer>
      </TPACKDiagrammWrapper>
      <InfoWrapper>
        <InfoContainer>
          <InfoTextWrapper>
            <InfoTextContainer>
              <h3>{headline}</h3>
              <p>{description}</p>
            </InfoTextContainer>
            <VerticalText>mehr Information</VerticalText>
          </InfoTextWrapper>
        </InfoContainer>
      </InfoWrapper>
    </DiagrammWrapper>
  );
};

export default TPACKDiagramm;
