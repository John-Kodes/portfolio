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
      <Logo className="logo" />
      <NavLink>Get to know me</NavLink>
      <NavLink>Stuff I've made</NavLink>
      <ContactBtn>
        Let's talk
        <PenIcon className="PenSvg" />
      </ContactBtn>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  grid-column: main-content-start / main-content-end;
  grid-row: 1/2;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8rem;

  padding: 1.6rem 0;

  position: relative;
  z-index: 3;

  .logo {
    margin-right: auto;
  }
`;

const NavLink = styled(motion.button)`
  font-weight: 500;
  font-size: 1.4rem;
  color: #148e97;

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
