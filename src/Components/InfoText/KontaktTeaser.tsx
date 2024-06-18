import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button as BaseButton } from "../UI/Buttons/Button.styled";
import useDarkModeStore from "../stores/useDarkModeStore";

interface KontaktTeaserProps {
  headline: string;
  descriptionOne: string;
  descriptionTwo: string;
  linkTo: string;
  button: string;
  $buttonVariant?: "tertiary";
}

interface DarkModeProps {
  isDarkModeOn: boolean;
}

const KontaktTeaser: React.FC<KontaktTeaserProps> = ({
  headline,
  descriptionOne,
  descriptionTwo,
  linkTo,
  button,
  $buttonVariant,
}) => {

  const { isDarkModeOn } = useDarkModeStore();

  return (
    <KontaktTeaserWrapper isDarkModeOn={isDarkModeOn}>
      <KontaktTeaserContainer>
        <HeadlineContainer>{headline}</HeadlineContainer>
        <DescriptionContainer>
          <p>{descriptionOne}</p>
          <p>{descriptionTwo}</p>
        </DescriptionContainer>
        <Button as={Link} to={linkTo} $buttonVariant={$buttonVariant}>
          {button}
        </Button>
      </KontaktTeaserContainer>
    </KontaktTeaserWrapper>
  );
};

export default KontaktTeaser;

export const KontaktTeaserWrapper = styled.div<DarkModeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
background-color: ${({ isDarkModeOn }) =>
    isDarkModeOn ? "black" : "var(--leviko-white)"};  padding: 100px 0;

  @media (max-width: 1024px) {
    padding: 80px 0;
  }

  @media (max-width: 430px) {
    padding: 56px 0;
    height: 100vh;
  }
`;

export const KontaktTeaserContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 160px;
  padding: 40px 96px;
  background-color: var(--leviko-green);
  color: var(--leviko-black);
  min-height: 230px;

  @media (max-width: 1330px) {
    margin-right: 24px;
    margin-left: 24px;
    min-height: none;
  }

  @media (max-width: 1024px) {
    margin: 0px 24px;
    padding: 40px 23px;
  }

  @media (max-width: 430px) {
    align-items: start;
    gap: 32px;
    justify-content: center;
    padding: 100px 23px;
    flex-direction: column;
  }
`;

export const HeadlineContainer = styled.h3`
  order: 1;
  align-self: flex-start;

  @media (max-width: 430px) {
    order: 0;
  }
`;

export const Button = styled(BaseButton)`
  order: 2;
  align-self: flex-end;
  position: absolute;
  height: fit-content;

  @media (max-width: 430px) {
    order: 0;
    align-self: flex-start;
    position: relative;
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 70%;
  order: 3;
  _max-width: 700px;

  @media (max-width: 1024px) {
    width: 40%;
  }

  @media (max-width: 430px) {
    width: 100%;
    order: 0;
  }
`;
