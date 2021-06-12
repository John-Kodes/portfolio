// Animation
import { motion } from "framer-motion";
// Styles
import styled from "styled-components";
// SVG
import { ReactComponent as DevIcon } from "../img/DevIcon.svg";
import { ReactComponent as DesignIcon } from "../img/DesignIcon.svg";
import { ReactComponent as DotBg } from "../img/skillsBg.svg";
// Logos
import { ReactComponent as ReactIcon } from "../img/React.svg";
import { ReactComponent as JavascriptIcon } from "../img/javascript.svg";
import { ReactComponent as HtmlIcon } from "../img/html5.svg";
import { ReactComponent as ScssAndCssIcon } from "../img/scssAndCss.svg";
import { ReactComponent as GitAndGithubIcon } from "../img/gitAndGithub.svg";

const AboutSection = () => {
  return (
    <StyledAboutSection>
      <AboutGrid>
        <AboutText>
          <h1>A bit about me</h1>
          <p>
            Hello! My name is Daniel. I’m a Front-End Developer based in Dubai.
            I specialise in creating engaging and interactive experiences, and
            also functional interfaces using React. I spend everyday improving
            both my coding, and design skills. <br />
            <br /> I have a passion for creating code, animations and also
            creating intuitive, dynamic user experiences.
          </p>
        </AboutText>

        <SkillCardContainer>
          <SkillCard className="first">
            <DevIcon />
            <h2>Developer</h2>
            <p>
              Create custom websites from scratch. I really enjoy the problem
              solving aspect in writing code
            </p>
          </SkillCard>
          <SkillCard className="second">
            <DesignIcon />
            <h2>Design</h2>
            <p>
              Create beautiful websites with a sleek design while still keeping
              the user’s experience priority number one
            </p>
          </SkillCard>
        </SkillCardContainer>

        <TechSkillsContainer>
          <DotBg className="tech-skills_background" />
          <h3>Technological Skills</h3>

          <TechSkillCard style={{ gridColumn: 2 }} className="react__icon">
            <ReactIcon />
            <h4>React</h4>
            <p>
              Redux
              <br />
              Router
              <br />
              Framer-motion
              <br />
              Axios
            </p>
          </TechSkillCard>

          <TechSkillCard className="javascript__icon">
            <JavascriptIcon />
            <h4>JavaScript</h4>
          </TechSkillCard>

          <TechSkillCard className="css__icon">
            <ScssAndCssIcon />
            <h4>SCSS / CSS3</h4>
            <p>
              CSS Grid
              <br />
              FlexBox
              <br />
              Responsive
            </p>
          </TechSkillCard>

          <TechSkillCard className="html__icon">
            <HtmlIcon />
            <h4>HTML5</h4>
          </TechSkillCard>

          <TechSkillCard className="git__icon">
            <GitAndGithubIcon />
            <h4>GitHub / Git</h4>
          </TechSkillCard>
          <Caption>
            I spend most of my time learning new skills and technologies to use,
            to make your websites better.
          </Caption>
        </TechSkillsContainer>
      </AboutGrid>
    </StyledAboutSection>
  );
};
const Caption = styled(motion.p)`
  grid-column: 1/-1;
  margin-top: 3rem;
  width: 50ch;
  text-align: center;
`;

const TechSkillsContainer = styled(motion.div)`
  grid-column: 1/-1;

  display: grid;
  grid-template-columns:
    [margin-left-start] minmax(1rem, 6rem) [margin-left-end] repeat(
      5,
      [col-start] 14rem [col-end]
    )
    [margin-right-start] minmax(1rem, 6rem) [margin-left-end];

  grid-template-rows: min-content 25rem;

  gap: 2rem;
  justify-content: center;
  justify-items: center;

  h3 {
    grid-row: 1;
    grid-column: 1/-1;
    padding: 1.5rem 2.5rem;
    border-radius: 4px 4px 3.5rem 3.5rem;
    background-color: #fff;
    box-shadow: 0 4px 2rem ${(props) => props.theme.boxShadow100};

    margin-bottom: 4rem;
  }

  .tech-skills_background {
    grid-area: 1/1 / -1/-1;
    height: 100%;
  }

  .react__icon {
    grid-column: 2;

    /* height: 25rem; */
    p::after {
      content: "";
      background-color: #e9f0f5;
      position: absolute;
      height: 11.3rem;
      width: 110%;
      bottom: -1.1rem;
      left: 50%;
      transform: translateX(-50%);
      z-index: -1;
    }

    &:hover {
      height: 29rem;
    }
  }

  .javascript__icon {
    grid-column: 3;
  }

  .css__icon {
    grid-column: 4;

    &:hover {
      height: 26rem;
    }

    p::after {
      content: "";
      background-color: #e9f0f5;
      position: absolute;
      height: 9.3rem;
      width: 110%;
      bottom: -1.5rem;
      left: 50%;
      transform: translateX(-50%);
      z-index: -1;
    }
  }

  .html__icon {
    grid-column: 5;
  }

  .git__icon {
    grid-column: 6;
  }
`;

const TechSkillCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  grid-row: 2;

  height: 17rem;
  width: 100%;
  gap: 2rem;
  padding: 2rem 0;

  background-color: #fff;
  border-radius: 2rem;
  box-shadow: 0 4px 2rem ${(props) => props.theme.boxShadow150};

  transition: all 0.4s, transform 0.2s;
  overflow: hidden;

  &:hover {
    transform: translateY(-8px);
  }

  svg {
    min-width: 10rem;
    min-height: 10rem;
    max-width: 10rem;
    max-height: 10rem;
  }

  p {
    width: 100%;
    position: relative;
    color: #656d86;
    font-size: 1.6rem;
    z-index: 2;
    text-align: center;
  }
`;

const SkillCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;

  width: 30rem;
  height: 35rem;

  border: 2px solid #f0f5f7;
  background-color: #fff;
  border-radius: 2rem;
  box-shadow: 0 1rem 2rem ${(props) => props.theme.boxShadow100};

  svg {
    /* fill: orange; */
  }

  h2 {
    position: relative;
    font-weight: 600;
    font-size: 2.4rem;
    color: #326e88;

    &::after {
      content: "";
      position: absolute;
      bottom: -1rem;
      left: 50%;
      transform: translateX(-50%);

      width: 3.6rem;
      height: 3px;
      background-color: ${(props) => props.theme.primaryColor100};
    }
  }
  p {
    color: #7c98a8;
    font-size: 1.4rem;
    width: 18rem;
    text-align: center;
  }
`;

const SkillCardContainer = styled(motion.div)`
  position: relative;
  height: 62rem;

  .first {
    position: absolute;
    top: 0;
    left: 0;

    transition: all 0.3s;

    &:hover {
      transform: translate(-18px, -5px) rotate(-2deg);
    }
  }

  .second {
    position: absolute;
    bottom: 0;
    right: 0;

    transition: all 0.6s;

    &:hover {
      transform: translate(15px, -2px) rotate(3deg);
    }
  }
`;

const AboutText = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const AboutGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: minmax(min-content, 36rem) minmax(min-content, 50.9rem);
  justify-content: center;
  align-content: center;
  align-items: center;

  height: 100%;
  gap: 6rem;
`;

const StyledAboutSection = styled(motion.div)`
  grid-column: 1/-1;
  grid-row: 3/4;

  height: 100%;
  background-color: #fff;
  z-index: 3;
`;

export default AboutSection;
