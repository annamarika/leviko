import styled from "styled-components";
import { Button } from "../UI/Buttons/Button.styled";
import { Link } from "react-router-dom";

interface MethodenOutroProps {
  description: JSX.Element | string;
  linkTo: string;
  button: string;
}

const MethodenOutro: React.FC<MethodenOutroProps> = ({
  description,
  linkTo,
  button,
}) => {
  return (
    <MethodenIntroContainer>
      <p>{description}</p>
      <Button as={Link} to={linkTo}>
        {button}
      </Button>
    </MethodenIntroContainer>
  );
};

export default MethodenOutro;

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
