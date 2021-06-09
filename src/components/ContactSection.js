// Svg
import { ReactComponent as ContactDecor } from "../img/contactDecor.svg";
// Animation
import { motion } from "framer-motion";
// Styles
import styled from "styled-components";

const ContactSection = () => {
  return (
    <StyledContactSection>
      <h1 className="title-faint">...interested?</h1>
      <ContactCard>
        <ContactDecor />
        <h1>Let's Talk!</h1>
      </ContactCard>
    </StyledContactSection>
  );
};

const ContactCard = styled(motion.div)`
  position: relative;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;

  background-color: #fff;
  border-radius: 3rem;
  width: 100%;
  min-height: 50rem;
  padding: 5rem;
  box-shadow: 0 2rem 4rem ${(props) => props.theme.boxShadow200};

  overflow: hidden;

  h1 {
    grid-column: 1/-1;
    color: ${(props) => props.theme.black};
  }
  svg {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const StyledContactSection = styled(motion.div)`
  grid-row: 5;
  grid-column: col-start 2 / col-end 7;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  .title-faint {
    font-size: 2.4rem;
    color: #b3b8c0;
  }
`;

export default ContactSection;
