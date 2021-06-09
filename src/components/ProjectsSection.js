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
      transition: { duration: 0.05 },
    },
  };
  return (
    <StyledProjectsSection>
      <h1>Stuff I've made</h1>
      <ProjectCard>
        <CardDesc>
          <motion.button
            variants={visitBtnAnim}
            initial="initial"
            whileHover="hover"
          >
            Visit Project <Arrow />
          </motion.button>
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
          <motion.button whileHover={{ width: "12rem" }}>
            <GithubLogo />
            <p>view code</p>
          </motion.button>
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
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(185deg, rgba(0, 0, 0, 0.9), #11002ce5),
    url(${polyBg});
  background-attachment: fixed;
  z-index: 2;

  button {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    gap: 1rem;

    position: absolute;
    top: 2rem;
    right: 2rem;

    border: 3px solid #fff;
    border-radius: 100rem;
    padding: 5px 5px 5px 12px;
    width: 2.5rem;

    transition: all 0.5s;
    overflow: hidden;

    svg {
      display: block;
      min-height: 3.2rem;
      min-width: 3.2rem;
      max-height: 3.2rem;
      max-width: 3.2rem;
    }

    p {
      color: #fff;
      font-size: 1.6rem;
      min-width: 7.5rem;
      max-width: 7.5rem;
    }
  }

  h2 {
    display: flex;
    font-size: 7rem;
    color: #fff;
    position: relative;
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
  flex: 0 0 calc(50% - 12rem);

  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 3rem 6rem;

  button {
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
    box-shadow: 0 4px 2rem ${(props) => props.theme.boxShadow300};

    transition: transform 0.2s;

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
  }

  ul {
    margin-left: 2rem;
  }
`;

const ProjectCard = styled(motion.div)`
  display: flex;
  box-sizing: content-box;

  background-color: #fff;
  width: 100%;
  border-radius: 3rem;
  box-shadow: 0 2rem 4rem ${(props) => props.theme.boxShadow200};

  overflow: hidden;
`;

const StyledProjectsSection = styled(motion.div)`
  grid-row: 4;
  grid-column: col-start 2 / col-end 7;
  padding: 8rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rem;
`;

export default ProjectsSection;
