// Svg
import { ReactComponent as GitHubLink } from "../img/GitHubLink.svg";
import { ReactComponent as LinkedInLink } from "../img/LinkedInLink.svg";
import { ReactComponent as TwitterLink } from "../img/TwitterLink.svg";
// Animation
import { motion, useAnimation } from "framer-motion";
import { ScrollInHook } from "../animations";
// Styles
import styled from "styled-components";

const Footer = () => {
  const [element, controls] = ScrollInHook(0);

  const footerAnim = {
    show: { opacity: 1, transition: { delay: 0.2 } },
    hidden: { opacity: 0, transition: { delay: 0.2 } },
  };

  return (
    <FooterStyled
      variants={footerAnim}
      animate={controls}
      initial="hidden"
      ref={element}
    >
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
  }
  path {
    fill: #9fa8b6;
    transition: fill 0.2s;
  }

  a {
    transition: all 0.2s;
    &:hover {
      transform: translateY(-4px);
    }
    &:hover path {
      fill: ${(p) => p.theme.black};
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
