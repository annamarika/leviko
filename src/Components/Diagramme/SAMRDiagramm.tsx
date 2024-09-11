import React from "react";
import { useSAMRDStore } from "../stores/useSAMRDStore";
import useDarkModeStore from "../stores/useDarkModeStore";
import {
  DiagrammWrapper,
  InfoWrapper,
  InfoHorizontalWrapper,
  InfoHorizontalText,
  InfoHorizontalline,
  InfoContainer,
  InfoLetter,
  InfoBoxContainer,
  InfoBoxHeadline,
  InfoBoxOne,
  InfoBoxTwo,
  InfoBoxThree,
  InfoBoxFour,
  InfoBoxText,
  InfoBoxCTA,
} from "../UI/Diagramme/SAMRDiagramm.styled.tsx";

const SAMRDiagramm: React.FC = () => {
  const { clickedId, setClickedId, content } = useSAMRDStore();
  const { isDarkModeOn } = useDarkModeStore();

  const handleClick = (id: string) => {
    setClickedId(clickedId === id ? null : id);
  };

  return (
    <>
      <DiagrammWrapper>
        <InfoWrapper>
          {content.map((box) => (
            <InfoContainer key={box.id} onClick={() => handleClick(box.id)}>
              <InfoLetter
                $isDarkModeOn={isDarkModeOn}
                $isClicked={clickedId === box.id}
              >
                {box.title[0]} {/* First letter of the title */}
              </InfoLetter>
              <InfoBoxContainer>
                <InfoBoxHeadline
                  $isDarkModeOn={isDarkModeOn}
                  $isClicked={clickedId === box.id}
                >
                  {box.title.slice(1)}
                </InfoBoxHeadline>
                {box.id === "container1" && (
                  <InfoBoxOne $isClicked={clickedId === box.id}>
                    {clickedId === box.id ? (
                      <>
                        <InfoBoxText $isClicked={clickedId === box.id}>
                          {box.fullText}
                        </InfoBoxText>
                        <InfoBoxCTA>mehr Information</InfoBoxCTA>
                      </>
                    ) : (
                      <InfoBoxText $isClicked={clickedId === box.id}>
                        {box.shortText}
                      </InfoBoxText>
                    )}
                  </InfoBoxOne>
                )}
                {box.id === "container2" && (
                  <InfoBoxTwo $isClicked={clickedId === box.id}>
                    {clickedId === box.id ? (
                      <>
                        <InfoBoxText $isClicked={clickedId === box.id}>
                          {box.fullText}
                        </InfoBoxText>
                        <InfoBoxCTA>mehr Information</InfoBoxCTA>
                      </>
                    ) : (
                      <InfoBoxText $isClicked={clickedId === box.id}>
                        {box.shortText}
                      </InfoBoxText>
                    )}
                  </InfoBoxTwo>
                )}
                {box.id === "container3" && (
                  <InfoBoxThree $isClicked={clickedId === box.id}>
                    {clickedId === box.id ? (
                      <>
                        <InfoBoxText $isClicked={clickedId === box.id}>
                          {box.fullText}
                        </InfoBoxText>
                        <InfoBoxCTA>mehr Information</InfoBoxCTA>
                      </>
                    ) : (
                      <InfoBoxText $isClicked={clickedId === box.id}>
                        {box.shortText}
                      </InfoBoxText>
                    )}
                  </InfoBoxThree>
                )}
                {box.id === "container4" && (
                  <InfoBoxFour $isClicked={clickedId === box.id}>
                    {clickedId === box.id ? (
                      <>
                        <InfoBoxText $isClicked={clickedId === box.id}>
                          {box.fullText}
                        </InfoBoxText>
                        <InfoBoxCTA>mehr Information</InfoBoxCTA>
                      </>
                    ) : (
                      <InfoBoxText $isClicked={clickedId === box.id}>
                        {box.shortText}
                      </InfoBoxText>
                    )}
                  </InfoBoxFour>
                )}
              </InfoBoxContainer>
            </InfoContainer>
          ))}
        </InfoWrapper>

        {/* Horizontal Information */}
        <InfoHorizontalWrapper>
          <InfoHorizontalText $isDarkModeOn={isDarkModeOn}>
            Verbesserung
          </InfoHorizontalText>
          <InfoHorizontalline $isDarkModeOn={isDarkModeOn} />
          <InfoHorizontalText $isDarkModeOn={isDarkModeOn}>
            Transformation
          </InfoHorizontalText>
        </InfoHorizontalWrapper>
      </DiagrammWrapper>
    </>
  );
};

export default SAMRDiagramm;
