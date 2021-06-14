// SVG
import polyBg from "../img/polyBg.svg";
import { ReactComponent as GithubLogo } from "../img/github.svg";
import { ReactComponent as Arrow } from "../img/ArrowBtn.svg";
// Animation
import { motion } from "framer-motion";
import { letterAnim } from "../animations";
// Styles
import styled from "styled-components";

const ProjectsSection = () => {
  const visitBtnAnim = {
    initial: {
      transition: { duration: 0.05 },
    },

    hover: {
      x: 6,
      transition: { duration: 0.2 },
    },
  };
  return (
    <StyledProjectsSection id="section-projects">
      <h1>Stuff I've made</h1>
      <ProjectCard>
        <CardDesc>
          <motion.a
            variants={visitBtnAnim}
            initial="initial"
            whileHover="hover"
            target="_blank"
            href="https://blackjax.netlify.app/"
            rel="noreferrer"
          >
            Visit Project <Arrow />
          </motion.a>
          <h2>BlackJax</h2>
          <p>
            A Recreation of the game “BlackJack” in the form of a web browser
            experience, made with the React framework. This project involves
            complex JS logic and uses of the useEffect hook. Feel free to leave
            game and close the browser as the game will keep track of your
            progress so you won’t have to start from the beginning.
          </p>
          <div>
            <h4>Technologies used:</h4>
            <ul>
              <li>React</li>
              <li>Redux</li>
              <li>Styled-components</li>
              <li>Router</li>
              <li>Framer-motion</li>
              <li>LocalStorage</li>
            </ul>
          </div>
        </CardDesc>
        <CardContent>
          <motion.a
            whileHover={{ width: "14rem" }}
            target="_blank"
            href="https://github.com/John-Kodes/BlackJax"
            rel="noreferrer"
          >
            <GithubLogo />
            <p>view code</p>
          </motion.a>
          <h2>
            <motion.div whileHover={letterAnim}>B</motion.div>
            <motion.div whileHover={letterAnim}>l</motion.div>
            <motion.div whileHover={letterAnim}>a</motion.div>
            <motion.div whileHover={letterAnim}>c</motion.div>
            <motion.div whileHover={letterAnim}>k</motion.div>
            <motion.div whileHover={letterAnim}>J</motion.div>
            <motion.div whileHover={letterAnim}>a</motion.div>
            <motion.div whileHover={letterAnim}>x</motion.div>
          </h2>
        </CardContent>
      </ProjectCard>
    </StyledProjectsSection>
  );
};

const CardContent = styled(motion.div)`
  position: relative;
  flex: 0 0 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(185deg, rgba(0, 0, 0, 0.9), #0f091ae2),
    url(${polyBg});
  background-attachment: fixed;
  z-index: 2;

  @media only screen and (max-width: 55em) {
    flex: 0 0 50rem;
  }

  a {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 1rem;

    position: absolute;
    top: 2rem;
    right: 2rem;

    border: 0.3rem solid #fff;
    border-radius: 100rem;
    padding: 0.5rem 0.5rem 0.5rem 1.2rem;
    width: 4.8rem;

    overflow: hidden;
    @media only screen and (max-width: 31.25em) {
      border: 0.3rem solid #fff;
      padding: 0rem 0.5rem 0rem 1.2rem;
    }
    @media (hover: none) {
      width: 14rem;
    }
    svg {
      display: block;
      max-width: 3.2rem;
      min-width: 3.2rem;
    }

    p {
      color: #fff;
      font-size: 1.6rem;
      min-width: 7.5rem;
      max-width: 7.5rem;
    }
  }

  > h2 {
    display: flex;
    font-size: 7rem;
    color: #fff;
    position: relative;

    @media only screen and (max-width: 23em) {
      font-size: 6rem;
    }
    &::after {
      content: "";
      position: absolute;
      bottom: -1rem;
      left: 50%;
      transform: translateX(-50%);

      width: 50%;
      height: 2px;
      background-color: currentColor;
    }
  }
`;
const CardDesc = styled(motion.div)`
  position: relative;
  flex: 0 0 50%;

  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 3rem 6rem;

  @media only screen and (max-width: 55em) {
    padding: 6rem 20%;
  }

  @media only screen and (max-width: 34em) {
    padding: 6rem 10%;
  }

  @media only screen and (max-width: 23em) {
    padding: 6rem 10% 10rem;
  }

  a {
    position: absolute;
    right: 0;
    bottom: 3rem;
    display: flex;
    align-items: center;

    color: #fff;
    padding: 1.5rem;
    gap: 1rem;
    font-size: 1.6rem;
    font-weight: 500;
    background-color: ${(props) => props.theme.primaryColor100};
    border-radius: 10rem 0 0 10rem;
    box-shadow: 0 4px 2rem ${(props) => props.theme.boxShadow200};

    @media only screen and (max-width: 55em) {
      right: 3rem;
      font-size: 1.8rem;
      border-radius: 10rem;
    }
    svg {
      display: block;
      height: 2rem;
      width: 2rem;
      transform: rotate(180deg);
      filter: brightness(300%);
    }
  }

  h2 {
    font-weight: 400;
    color: ${(props) => props.theme.headingColor};
  }

  p,
  ul {
    font-size: 1.6rem;

    @media only screen and (max-width: 55em) {
      font-size: 1.8rem;
      max-width: 45ch;
    }
  }

  ul {
    margin: 1rem 0 0 2rem;
  }
`;

const ProjectCard = styled(motion.div)`
  display: flex;

  background-color: #fff;
  width: 100%;
  border-radius: 3rem;
  box-shadow: 0 2rem 4rem ${(props) => props.theme.boxShadow100};

  overflow: hidden;

  @media only screen and (max-width: 55em) {
    flex-direction: column-reverse;
  }
`;

const StyledProjectsSection = styled(motion.div)`
  grid-row: 4;
  grid-column: col-start 2 / col-end 7;
  padding: 8rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rem;

  @media only screen and (max-width: 64em) {
    grid-column: col-start 1 / col-end 8;
    padding: 8rem 2rem;
  }
`;

export default ProjectsSection;
