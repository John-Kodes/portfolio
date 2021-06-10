// Svg
import { ReactComponent as GitHubLink } from "../img/GitHubLink.svg";
import { ReactComponent as LinkedInLink } from "../img/LinkedInLink.svg";
import { ReactComponent as TwitterLink } from "../img/TwitterLink.svg";
// Animation
import { motion } from "framer-motion";
// Styles
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyled>
      <SocialBox>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/john-daniel-semine-949ab0204/"
          rel="noreferrer"
        >
          <LinkedInLink />
        </a>
        <a
          target="_blank"
          href="https://github.com/John-Kodes/"
          rel="noreferrer"
        >
          <GitHubLink />
        </a>
        <a
          target="_blank"
          href="https://twitter.com/DanieI_js"
          rel="noreferrer"
        >
          <TwitterLink />
        </a>
      </SocialBox>
      <Message>Made with ♥</Message>
      <Copyright>© 2021 John Daniel Semine</Copyright>
    </FooterStyled>
  );
};

const SocialBox = styled(motion.div)`
  display: flex;
  gap: 5px;

  svg {
    display: block;
    filter: brightness(110%);
  }

  a {
    transition: all 0.2s;
    &:hover {
      transform: translateY(-4px);
    }
  }
`;

const Copyright = styled(motion.div)`
  font-family: "Montserrat", sans-serif;
  color: #9199a7;
  font-size: 1.2rem;
  font-weight: 600;
`;

const Message = styled(Copyright)`
  position: absolute;
  left: 50%;

  transform: translateX(-50%);
`;

const FooterStyled = styled(motion.div)`
  position: relative;
  grid-column: main-content-start/main-content-end;
  grid-row: 7;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  height: 10rem;
  padding-bottom: 5px;
`;

export default Footer;
