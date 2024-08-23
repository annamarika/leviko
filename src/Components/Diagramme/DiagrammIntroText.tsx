import styled from "styled-components";

interface MethodenIntroProps {
  headline: JSX.Element | string;
  description: JSX.Element | string;
}

const DiagrammIntroText: React.FC<MethodenIntroProps> = ({
  headline,
  description,
}) => {
  return (
    <MethodenIntroContainer className="DBRDiagrammWrapper">
      <h3>{headline}</h3>
      <Description>{description}</Description>
    </MethodenIntroContainer>
  );
};

export default DiagrammIntroText;

export const MethodenIntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 160px;
  margin-left: 160px;
  padding: 50px 0;

  @media (max-width: 1330px) {
    margin-right: 24px;
    margin-left: 24px;
  }

  @media (max-width: 1024px) {
    margin-right: 24px;
    margin-left: 24px;
  }
  @media (max-width: 430px) {
    padding: 0 0;
    flex-direction: column;
    align-items: start;
    margin-bottom: 0;
    align-items: stretch;
  }
`;

export const Description = styled.div`
  margin-top: 80px;
  margin-bottom: 50px;

  @media (max-width: 1024px) {
    margin-top: 24px;
    margin-bottom: 0px;
  }
  @media (max-width: 430px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;
