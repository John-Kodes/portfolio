// SVG & Img
import { ReactComponent as HeaderSvg } from "../img/HeaderSvg.svg";
import photo from "../img/PHOTOFINALcomp720.png";
// Animation
import { motion } from "framer-motion";
import { letterAnim } from "../animations";
// Styles
import styled from "styled-components";

const Header = () => {
  return (
    <>
      <StyledHeader>
        <Photo
          src={photo}
          alt="John Daniel Semine Photo. Credit: Joan Semine"
        />
        <HeaderSvg className="svg" />
        <Content>
          <FirstName>
            <motion.div whileHover={letterAnim}>J</motion.div>
            <motion.div whileHover={letterAnim}>o</motion.div>
            <motion.div whileHover={letterAnim}>h</motion.div>
            <motion.div whileHover={letterAnim}>n</motion.div>&nbsp;
            <motion.div whileHover={letterAnim}>D</motion.div>
            <motion.div whileHover={letterAnim}>a</motion.div>
            <motion.div whileHover={letterAnim}>n</motion.div>
            <motion.div whileHover={letterAnim}>i</motion.div>
            <motion.div whileHover={letterAnim}>e</motion.div>
            <motion.div whileHover={letterAnim}>l</motion.div>
          </FirstName>
          <LastName>
            <motion.div whileHover={letterAnim}>S</motion.div>
            <motion.div whileHover={letterAnim}>e</motion.div>
            <motion.div whileHover={letterAnim}>m</motion.div>
            <motion.div whileHover={letterAnim}>i</motion.div>
            <motion.div whileHover={letterAnim}>n</motion.div>
            <motion.div whileHover={letterAnim}>e</motion.div>
          </LastName>
          <Desc>
            <motion.div whileHover={letterAnim(-4)}>
              Front-end Webdeveloper
            </motion.div>
            &nbsp; \ &nbsp;
            <motion.div whileHover={letterAnim(-4)}>Designer</motion.div>&nbsp;
            \ &nbsp;
            <motion.div whileHover={letterAnim(-4)}>Creative</motion.div>
          </Desc>
          <BtnContainer>
            <AboutBtn>About me</AboutBtn>
            <ProjectsBtn>Checkout some of my projects!</ProjectsBtn>
          </BtnContainer>
        </Content>
      </StyledHeader>
    </>
  );
};

const Desc = styled.div`
  display: flex;

  position: relative;
  margin: 2.3em 0;

  &::before {
    content: "";
    position: absolute;
    top: -3rem;
    left: 50%;

    width: 20rem;
    height: 2px;
    background-color: currentColor;
    transform: translateX(-50%);
  }
`;

const StyledHeader = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;

  grid-column: col-start 2 / col-end 7;
  grid-row: 1/3;

  .svg {
    position: absolute;
    z-index: 1;
    right: -75rem;
  }
`;

const Photo = styled(motion.img)`
  position: absolute;

  height: 95rem;
  bottom: -20rem;
  right: -10rem;
  z-index: 2;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 1.6rem;
  font-weight: 400;
  color: ${(props) => props.theme.primaryColor200};
  z-index: 2;
`;

const FirstName = styled(motion.div)`
  display: flex;
  font-family: "Yeseva One", sans-serif;
  font-size: 6.1rem;
  line-height: 1.1;
`;

const LastName = styled(FirstName)`
  font-size: 10.2rem;
`;

const BtnContainer = styled(motion.div)`
  align-self: stretch;
  display: flex;
  justify-content: space-between;
`;

const AboutBtn = styled(motion.button)`
  background-color: ${(props) => props.theme.primaryColor100};
  color: #fff;
  padding: 1rem 1.6rem;
  border-radius: 4px;
  box-shadow: 0 0.6rem 2rem ${(props) => props.theme.boxShadow200};

  transition: all 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 1rem 2.8rem ${(props) => props.theme.boxShadow200};
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0 0.5rem 1.5rem ${(props) => props.theme.boxShadow200};
  }
`;

const ProjectsBtn = styled(motion.button)`
  background-color: #fff;
  padding: 1rem 1.6rem;
  border-radius: 4px;
  box-shadow: 0 0.6rem 2rem ${(props) => props.theme.boxShadow100};

  transition: all 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 1rem 2.8rem ${(props) => props.theme.boxShadow100};
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0 0.5rem 1.5rem ${(props) => props.theme.boxShadow100};
  }
`;

export default Header;
