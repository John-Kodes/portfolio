// Animation
import { motion } from "framer-motion";
// Styles
import styled from "styled-components";

const ContactSection = () => {
  return (
    <StyledContactSection>
      <h1>Let's Talk!</h1>
    </StyledContactSection>
  );
};

const StyledContactSection = styled(motion.div)`
  grid-row: 5;
  grid-column: col-start 2 / col-end 7;
  background-color: orange;
`;

export default ContactSection;
