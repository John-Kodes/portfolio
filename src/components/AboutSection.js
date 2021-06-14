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
    <StyledAboutSection id="section-about">
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
            <DevIcon className="dev-icon" />
            <h2>Developer</h2>
            <p>
              Create custom websites from scratch. I really enjoy the problem
              solving aspect in writing code
            </p>
          </SkillCard>
          <SkillCard className="second">
            <DesignIcon className="design-icon" />
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

          <TechSkillBox>
            <TSCardContainer>
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
            </TSCardContainer>

            <TSCardContainer>
              <TechSkillCard className="javascript__icon">
                <JavascriptIcon />
                <h4>JavaScript</h4>
                <p>
                  ES6+
                  <br />
                  Aync Await
                  <br />
                  JS Promise
                </p>
              </TechSkillCard>
            </TSCardContainer>

            <TSCardContainer>
              <TechSkillCard className="css__icon">
                <ScssAndCssIcon />
                <h4>SCSS / CSS3</h4>
                <p>
                  CSS Grid
                  <br />
                  FlexBox
                  <br />
                  Responsive
                  <br />
                  BEM
                </p>
              </TechSkillCard>
            </TSCardContainer>

            <TSCardContainer>
              <TechSkillCard className="html__icon">
                <HtmlIcon />
                <h4>HTML5</h4>
                <p>Forms</p>
              </TechSkillCard>
            </TSCardContainer>

            <TSCardContainer>
              <TechSkillCard className="git__icon">
                <GitAndGithubIcon />
                <h4>GitHub / Git</h4>
              </TechSkillCard>
            </TSCardContainer>
          </TechSkillBox>
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
  max-width: 50ch;
  width: 100%;
  text-align: center;
`;

const TSCardContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  width: 14rem;
  height: 30rem;
`;

const TechSkillsContainer = styled(motion.div)`
  position: relative;
  grid-column: 1/-1;

  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    padding: 1.5rem 2.5rem;
    border-radius: 4px 4px 3.5rem 3.5rem;
    background-color: #fff;
    box-shadow: 0 4px 2rem ${(props) => props.theme.boxShadow100};

    margin-bottom: 4rem;
  }

  .tech-skills_background {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: -1;

    width: 100%;
  }

  .react__icon {
    /* height: 25rem; */
    p::after {
      content: "";
      background-color: #009b9b;
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
    @media (hover: none) {
      height: 29rem;
    }
  }

  .javascript__icon {
    &:hover {
      height: 26rem;
    }
    @media (hover: none) {
      height: 26rem;
    }

    p::after {
      content: "";
      background-color: #009b9b;
      position: absolute;
      height: 9.5rem;
      width: 110%;
      bottom: -1.5rem;
      left: 50%;
      transform: translateX(-50%);
      z-index: -1;
    }
  }

  .css__icon {
    p::after {
      content: "";
      background-color: #009b9b;
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
    @media (hover: none) {
      height: 29rem;
    }
  }

  .html__icon {
    &:hover {
      height: 22rem;
    }
    @media (hover: none) {
      height: 22rem;
    }

    p::after {
      content: "";
      background-color: #009b9b;
      position: absolute;
      height: 5rem;
      width: 110%;
      bottom: -1.5rem;
      left: 50%;
      transform: translateX(-50%);
      z-index: -1;
    }
  }
`;

const TechSkillBox = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  width: 100%;
`;

const TechSkillCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

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
    color: #fff;
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
  padding: 0 2rem;

  border: 2px solid #f0f5f7;
  background-color: #fff;
  border-radius: 2rem;
  box-shadow: 0 1rem 2rem ${(props) => props.theme.boxShadow100};

  @media only screen and (max-width: 44em) {
    width: 25.71rem;
    height: 30rem;
  }

  @media only screen and (max-width: 34em) {
    width: 21.43rem;
    height: 34rem;
  }

  @media only screen and (max-width: 27em) {
    width: 29rem;
  }

  .dev-icon {
    min-height: 5.6rem;
    min-width: 6.9rem;
    max-height: 5.6rem;
    max-width: 6.9rem;
  }

  .design-icon {
    min-height: 6.5rem;
    min-width: 15.6rem;
    max-height: 6.5rem;
    max-width: 15.6rem;
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
    width: 100%;
    max-width: 18rem;
    text-align: center;
  }
`;

const SkillCardContainer = styled(motion.div)`
  position: relative;
  height: 62rem;
  width: 100%;

  @media only screen and (max-width: 78em) {
    height: 65rem;
  }

  @media only screen and (max-width: 55em) {
    grid-column: 1/-1;
    grid-row: 2;

    display: flex;
    justify-content: center;
    gap: 2rem;
    height: auto;
  }

  @media only screen and (max-width: 27em) {
    flex-direction: column;
    align-items: center;
  }

  .first {
    position: absolute;
    top: 0;
    left: 0;

    transition: all 0.3s;

    @media only screen and (max-width: 55em) {
      position: relative;
    }

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
    @media only screen and (max-width: 55em) {
      position: relative;
    }
  }
`;

const AboutText = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  @media only screen and (max-width: 55em) {
    grid-column: 1/-1;
    grid-row: 1;

    width: 100%;
    max-width: 50ch;
    text-align: center;
  }
`;

const AboutGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: minmax(min-content, 12fr) minmax(min-content, 17fr);
  justify-content: center;
  align-content: center;
  align-items: center;
  justify-items: center;

  height: 100%;
  gap: 6rem;
`;

const StyledAboutSection = styled(motion.div)`
  position: relative;
  grid-column: col-start 2 / col-end 7;
  grid-row: 3/4;

  height: 100%;
  padding: 10rem 0;
  z-index: 3;

  @media only screen and (max-width: 64em) {
    grid-column: col-start 1 / col-end 8;
    padding: 10rem 4rem;
  }

  @media only screen and (max-width: 44em) {
    padding: 10rem 2rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);

    height: 100%;
    width: 100vw;
    background-color: #fff;
    z-index: -2;
  }
`;

export default AboutSection;
