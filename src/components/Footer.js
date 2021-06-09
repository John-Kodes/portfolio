// Animation
import { motion } from "framer-motion";
// Styles
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyled>
      <Message>Made with ♥</Message>
      <Copyright>© 2021 ALL RIGHTS RESERVED</Copyright>
    </FooterStyled>
  );
};

const Message = styled(motion.div)`
  font-family: "Montserrat", sans-serif;
  color: #9199a7;
  font-size: 1.4rem;
  font-weight: 600;
`;

const Copyright = styled(Message)`
  margin-right: 1rem;
`;

const FooterStyled = styled(motion.div)`
  grid-column: 1/-1;
  grid-row: 7;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 10rem;
  border: 1px solid orange;
`;

export default Footer;
