import styled from "styled-components";
import useDarkModeStore from "../stores/useDarkModeStore";

interface ForschungsfragenProps {
  headline: JSX.Element | string;
}

interface DarkModeProps {
  $isDarkModeOn: boolean;
}

const Forschungsfragen: React.FC<ForschungsfragenProps> = ({ headline }) => {
  const { isDarkModeOn } = useDarkModeStore();

  return (
    <ParalaxWrapper $isDarkModeOn={isDarkModeOn}>
      <ParalaxContainer $isDarkModeOn={isDarkModeOn}>
        <HeadlineContainer>
          <TextContainer>
            <h3>{headline}</h3>
          </TextContainer>
        </HeadlineContainer>
      </ParalaxContainer>
    </ParalaxWrapper>
  );
};

export default Forschungsfragen;

export const ParalaxWrapper = styled.div<DarkModeProps>`
  background-color: ${({ $isDarkModeOn }) =>
    $isDarkModeOn ? "var(--leviko-black)" : "var(--leviko-white)"};

  @media (max-width: 430px) {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
  }
`;

export const ParalaxContainer = styled.div<DarkModeProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 160px;
  margin-left: 160px;
  padding: 50px 0;
  gap: 80px;
  background-color: ${({ $isDarkModeOn }) =>
    $isDarkModeOn ? "var(--leviko-black)" : "var(--leviko-white)"};
  transition: background-color 0.8s ease, color 0.3s ease;

  color: ${({ $isDarkModeOn }) =>
    $isDarkModeOn ? "var(--leviko-white)" : "var(--leviko-black)"};

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

export const HeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  @media (max-width: 1024px) {
    gap: 38px;
  }

  @media (max-width: 430px) {
    width: 100%;
    gap: 20px;
    margin-bottom: 32px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (max-width: 1024px) {
    gap: 24px;
  }

  @media (max-width: 430px) {
    gap: 20px;
  }
`;
