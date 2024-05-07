/// <reference types="vite-plugin-svgr/client" />

import useHeaderStore from "../../stores/useHeaderStore";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  HeaderContainer,
  NavContainer,
  LogoContainer,
  StyledLogoSVG,
  ButtonContainer,
  ButtonContainerDisplay,
  HeaderButton,
  MenuIcon,
  Overlay,
  OverlayContainer,
  OverlayContent,
  MenuItem,
  ArrowContainer,
  StyledArrowSVG,
} from "../UI/Header.styled.tsx";

const Header: React.FC = () => {
  const {
    isMenuOpen,
    toggleMenu,
    visible,
    setVisible,
    lastScrollY,
    setLastScrollY,
  } = useHeaderStore((state) => ({
    isMenuOpen: state.isMenuOpen,
    toggleMenu: state.toggleMenu,
    visible: state.visible,
    setVisible: state.setVisible,
    lastScrollY: state.lastScrollY,
    setLastScrollY: state.setLastScrollY,
  }));

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setVisible(true); // Show header when scrolling up
      } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setVisible(false); // Hide header when scrolling down
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY, setVisible, setLastScrollY]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "visible"; // Enable scrolling
    }

    return () => {
      document.body.style.overflow = "visible"; // Re-enable scrolling on component unmount
    };
  }, [isMenuOpen]);

  return (
    <>
      <HeaderContainer $visible={visible}>
        <NavContainer>
          <LogoContainer as={Link} to="/">
            <StyledLogoSVG />
          </LogoContainer>
          <ButtonContainer>
            <MenuIcon onClick={toggleMenu} $isOpen={isMenuOpen}>
              <div className="line middle"></div>
            </MenuIcon>
            <ButtonContainerDisplay>
              <HeaderButton as={Link} to="/">
                Startseite
              </HeaderButton>
              <HeaderButton as={Link} to="/projekt">
                Projekt
              </HeaderButton>
              <HeaderButton as={Link} to="/team">
                Team
              </HeaderButton>
            </ButtonContainerDisplay>
          </ButtonContainer>
        </NavContainer>
      </HeaderContainer>
      {isMenuOpen && (
        <Overlay $isOpen={isMenuOpen}>
          <OverlayContainer>
            <OverlayContent>
              <MenuItem as={Link} to="/">
                Startseite
                <ArrowContainer>
                  <StyledArrowSVG />
                </ArrowContainer>
              </MenuItem>
            </OverlayContent>
            <OverlayContent>
              <MenuItem as={Link} to="/projekt">
                Projekt
                <ArrowContainer>
                  <StyledArrowSVG />
                </ArrowContainer>
              </MenuItem>
            </OverlayContent>
            <OverlayContent>
              <MenuItem as={Link} to="/team">
                Team
                <ArrowContainer>
                  <StyledArrowSVG />
                </ArrowContainer>
              </MenuItem>
            </OverlayContent>
          </OverlayContainer>
        </Overlay>
      )}
    </>
  );
};

export default Header;
