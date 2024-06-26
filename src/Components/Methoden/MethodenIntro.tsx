import styled from "styled-components";

interface MethodenIntroProps {
  headline: JSX.Element | string;
  description: JSX.Element | string;
}

const MethodenIntro: React.FC<MethodenIntroProps> = ({
  headline,
  description,
}) => {
  return (
    <MethodenIntroContainer>
      <h3>{headline}</h3>
      <p>{description}</p>
    </MethodenIntroContainer>
  );
};

export default MethodenIntro;

export const MethodenIntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-right: 160px;
  margin-left: 160px;
  padding: 50px 0;
  gap: 80px;

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
    gap: 0;
    margin-bottom: 0;
  }
`;
