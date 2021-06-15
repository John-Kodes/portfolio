// Components
import Nav from "./components/Nav";
// Animation
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
// Styles
import styled, { ThemeProvider } from "styled-components";
import GlobalTheme from "./globals/GlobalTheme";
import GlobalStyles from "./globals/GlobalStyles";
import Header from "./components/Header";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.5 });
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  } //return [element, controls]

  // <Motion.Element variants={animationObject} animate={controls} initial="initial" ref={element from useInView} />
  return (
    <ThemeProvider theme={GlobalTheme}>
      <GlobalStyles />
      <PageLayout>
        <Nav />
        <Header />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </PageLayout>
    </ThemeProvider>
  );
}

const PageLayout = styled(motion.div)`
  position: relative;
  display: grid;
  grid-template-columns:
    [margin-left-start] minmax(0rem, 1fr)
    [margin-left-end main-content-start] repeat(
      8,
      [col-start] minmax(1rem, 14rem) [col-end]
    )
    [main-content-end margin-right-start] minmax(0rem, 1fr)
    [margin-right-end];

  grid-template-rows: 6.6rem 80vh max-content minmax(50rem, max-content);

  @media only screen and (min-height: 50em) and (orientation: landscape) {
    grid-template-rows: 6.6rem 64rem max-content minmax(50rem, max-content);
  }

  align-items: center;
  align-content: center;

  gap: 2rem;
`;

export default App;
