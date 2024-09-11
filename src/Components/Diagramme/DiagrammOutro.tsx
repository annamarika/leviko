// MethodenOutro.tsx
import React from "react";
import { Button } from "../UI/Buttons/Button.styled.tsx";
import { Link } from "react-router-dom";
import { MethodenIntroContainer } from "../UI/Diagramme/DiagrammOutro.styled.tsx";

/**
 * The MethodenOutro component displays a description and a button.
 * It is used for navigating to another section or page.
 */
interface DiagrammOutroProps {
  description: JSX.Element | string;
  linkTo: string;
  button: string;
}

const DiagrammOutro: React.FC<DiagrammOutroProps> = ({
  description,
  linkTo,
  button,
}) => {
  return (
    <MethodenIntroContainer>
      {/* Display the description content */}
      <p>{description}</p>
      {/* Button that navigates to the linkTo destination */}
      <Button as={Link} to={linkTo}>
        {button}
      </Button>
    </MethodenIntroContainer>
  );
};

export default DiagrammOutro;
