/// <reference types="vite-plugin-svgr/client" />

import useHeaderStore from "../stores/useHeaderStore.tsx";
import ToggleSwitch from "../UI/Buttons/ToggleSwitch.tsx";
import { useLocation } from "react-router-dom";
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
} from "../UI/Header.styled.tsx";
import {
  ArrowContainer,
  StyledArrowSVG,
} from "../UI/Buttons/StyledArrowSVG.tsx";

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

  const location = useLocation();

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

  // Function to check if the current path matches the button link
  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <HeaderContainer $visible={visible}>
        <NavContainer>
          <LogoContainer as={Link} to="/">
            <StyledLogoSVG />
          </LogoContainer>
          <ButtonContainer>
            <ToggleSwitch />
            <MenuIcon onClick={toggleMenu} $isOpen={isMenuOpen}>
              <div className="line middle"></div>
            </MenuIcon>
            <ButtonContainerDisplay>
              <HeaderButton
                as={Link}
                to="/projekt"
                className={isActive("/projekt") ? "active" : ""}
              >
                Projekt
              </HeaderButton>
			  <HeaderButton
                as={Link}
                to="/termine"
                className={isActive("/termine") ? "active" : ""}
              >
                Termine
              </HeaderButton>
              <HeaderButton
                as={Link}
                to="/forschung"
                className={isActive("/forschung") ? "active" : ""}
              >
                Forschung
              </HeaderButton>
              <HeaderButton
                as={Link}
                to="/publikationen"
                className={isActive("/publikationen") ? "active" : ""}
              >
                Publikationen
              </HeaderButton>
              <HeaderButton
                as={Link}
                to="/team"
                className={isActive("/team") ? "active" : ""}
              >
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
              <MenuItem as={Link} to="/projekt" onClick={toggleMenu}>
                Projekt
                <ArrowContainer>
                  <StyledArrowSVG color="var(--leviko-green)" />
                </ArrowContainer>
              </MenuItem>
            </OverlayContent>
            <OverlayContent>
              <MenuItem as={Link} to="/forschung" onClick={toggleMenu}>
                Forschung
                <ArrowContainer>
                  <StyledArrowSVG color="var(--leviko-green)" />
                </ArrowContainer>
              </MenuItem>
            </OverlayContent>
            <OverlayContent>
              <MenuItem as={Link} to="/publikationen" onClick={toggleMenu}>
                Publikationen
                <ArrowContainer>
                  <StyledArrowSVG color="var(--leviko-green)" />
                </ArrowContainer>
              </MenuItem>
            </OverlayContent>
            <OverlayContent>
              <MenuItem as={Link} to="/team" onClick={toggleMenu}>
                Team
                <ArrowContainer>
                  <StyledArrowSVG color="var(--leviko-green)" />
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
