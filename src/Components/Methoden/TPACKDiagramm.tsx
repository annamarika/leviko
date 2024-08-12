import styled from "styled-components";

interface TPACKDiagrammProps {
  headline: JSX.Element | string;
  description: JSX.Element | string;
}

const TPACKDiagramm: React.FC<TPACKDiagrammProps> = ({
  headline,
  description,
}) => {
  return (
    <DiagrammWrapper>
      <InfoWrapper>
        <InfoContainer>
          <InfoTextWrapper>
            <InfoTextContainer>
              <h3>{headline}</h3>
              <div>{description}</div>
            </InfoTextContainer>
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
