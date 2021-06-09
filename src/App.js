// Components
import Nav from "./components/Nav";
// Animation
import { motion } from "framer-motion";
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
    [margin-left-start] minmax(1rem, 1fr)
    [margin-left-end main-content-start] repeat(
      8,
      [col-start] minmax(min-content, 14rem) [col-end]
    )
    [main-content-end margin-right-start] minmax(1rem, 1fr) [margin-right-end];

  grid-template-rows: 6.6rem 80vh 136.7rem minmax(50rem, max-content);

  align-items: center;
  align-content: center;

  gap: 2rem;
`;

export default App;
