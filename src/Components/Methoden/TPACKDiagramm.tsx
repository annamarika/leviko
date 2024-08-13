import styled from "styled-components";
import TPACKSVG from "../UI/SVG/TPACKsvg";
import { useTPACKStore } from "../stores/useTPACKStore";

interface TPACKDiagrammProps {
  headline: JSX.Element | string;
  description: JSX.Element | string;
}

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
              <h4>{headline}</h4>
              <div>{description}</div>
            </InfoTextContainer>
            <VerticalText>mehr Information</VerticalText>
          </InfoTextWrapper>
        </InfoContainer>
      </InfoWrapper>
    </DiagrammWrapper>
  );
};

export default TPACKDiagramm;

export const DiagrammWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  margin-right: 160px;
  margin-left: 160px;

  @media (max-width: 1330px) {
    margin-right: 24px;
    margin-left: 24px;
  }

  @media (max-width: 1024px) {
    margin-right: 24px;
    margin-left: 24px;
    gap: 24px;
  }
  @media (max-width: 430px) {
    padding: 0 0;
    flex-direction: column;
    align-items: start;
    gap: 24px;
    margin-bottom: 24px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 32px;
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const InfoTextWrapper = styled.div`
  display: flex;
  align-items: start;
  background-color: var(--leviko-green);
`;

export const InfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 20px 40px 64px;
  gap: 28px;
`;

export const VerticalText = styled.p`
  font-size: 16px;
  padding: 40px 10px;
  writing-mode: vertical-lr;
  transform: rotate(180deg);

  @media (max-width: 430px) {
    padding: 10px 10px;
  }
`;

export const TPACKDiagrammWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const DiagrammContainer = styled.div`
  position: relative;
  width: 100vw;
`;
