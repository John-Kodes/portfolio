// Animation
import { motion } from "framer-motion";
// Styles
import styled from "styled-components";

const ProjectsSection = () => {
  return (
    <StyledProjectsSection>
      <h1>Stuff I've made</h1>
      <ProjectCard>
        <CardDesc>
          <h2>BlackJax</h2>
          <p>
            A Recreation of the game “BlackJack” in the form of a web browser
            experience, made with the React framework. This project involves
            complex JS logic, using the useEffect hook. Feel free to leave game
            and close the browser as the game will keep track of your progress
            so you won’t have to start from the beginning.
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
          <h2>BlackJax</h2>
        </CardContent>
      </ProjectCard>
    </StyledProjectsSection>
  );
};

const CardContent = styled(motion.div)`
  flex: 0 0 50%;
  background-color: orange;
`;
const CardDesc = styled(motion.div)`
  flex: 0 0 calc(50% - 12rem);

  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 3rem 6rem;

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
