// Components
import { scrollToHandler } from "./Handlers";
// SVG
import { ReactComponent as PenIcon } from "../img/penIcon.svg";
import { ReactComponent as Logo } from "../img/JDS_logo.svg";
// Animation
import { motion } from "framer-motion";
// Styles
import styled from "styled-components";

const Nav = () => {
  return (
    <StyledNav>
      <Logo className="logo" onClick={() => window.location.reload()} />
      <NavLink onClick={() => scrollToHandler("section-about")}>
        Get to know me
      </NavLink>
      <NavLink onClick={() => scrollToHandler("section-projects")}>
        Stuff I've made
      </NavLink>
      <ContactBtn onClick={() => scrollToHandler("section-contact")}>
        Let's talk
        <PenIcon className="PenSvg" />
      </ContactBtn>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  position: relative;
  grid-column: main-content-start / main-content-end;
  grid-row: 1/2;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8rem;

  padding: 1.6rem 0;

  position: relative;
  z-index: 3;

  @media only screen and (max-width: 44em) {
    justify-content: space-between;
    gap: 0;

    @media only screen and (max-width: 34em) {
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);

        width: 110vw;
        height: 100%;
        z-index: -1;
      }
    }
  }

  .logo {
    margin-right: auto;
    cursor: pointer;

    @media only screen and (max-width: 44em) {
      margin-right: 0px;
    }
    @media only screen and (max-width: 34em) {
      display: none;
      visibility: hidden;
    }
  }
`;

const NavLink = styled(motion.button)`
  font-weight: 500;
  font-size: 1.4rem;
  color: #148e97;
  padding: 1rem 1rem;

  transition: all 0.2s;

  &:hover {
    transform: scale(1.05);
    color: #004a50;
  }

  &:active {
    transform: scale(0.95);
    color: #004a50;
  }
`;

const ContactBtn = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 1rem;

  font-size: 1.4rem;
  font-weight: 500;

  background-color: #fff;
  color: ${(props) => props.theme.black};
  padding: 1rem 1.5rem;
  border-radius: 4px;
  box-shadow: 0 1rem 2rem ${(props) => props.theme.boxShadow200};

  transition: all 0.2s;

  @media only screen and (max-width: 83.5em) {
    margin-right: 1rem;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 1.5rem 2.5rem ${(props) => props.theme.boxShadow200};
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0 0.5rem 1rem ${(props) => props.theme.boxShadow200};
  }
`;

export default Nav;
