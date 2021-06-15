// Svg
import { ReactComponent as ContactDecor } from "../img/contactDecor.svg";
import { ReactComponent as EmailIcon } from "../img/EmailIcon.svg";
// Animation
import { motion } from "framer-motion";
import { PageAnim, ScrollInHook } from "../animations";
// Styles
import styled from "styled-components";

const ContactSection = () => {
  const [element, controls] = ScrollInHook(0.2);

  const submitAnim = {
    hover: { y: -4 },
    tap: { y: 2 },
  };

  return (
    <StyledContactSection
      variants={PageAnim}
      animate={controls}
      initial="hidden"
      ref={element}
      id="section-contact"
    >
      <h1 className="title-faint">...interested?</h1>
      <ContactCard>
        <ContactDecor />
        <h1>Let's Talk!</h1>
        <Form
          action="https://formsubmit.co/3d78e4b8b90cd7abe0848380f531de17 "
          method="POST"
        >
          <div className="input">
            <input
              type="text"
              name="FullName"
              placeholder="Full Name"
              required
            />
            <label htmlFor="FullName" className="label">
              Full Name
            </label>
          </div>

          <div className="input">
            <input type="email" name="email" placeholder="Email" required />
            <label htmlFor="email">Email</label>
          </div>

          <div className="input">
            <input type="text" name="subject" placeholder="Subject" />
            <label htmlFor="subject">Subject</label>
          </div>

          <div className="input message">
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="12"
              placeholder="Message"
              required
            ></textarea>
            <label htmlFor="message">Message</label>
          </div>

          <SubmitBtn
            type="submit"
            variants={submitAnim}
            whileHover="hover"
            whileTap="tap"
          >
            SEND MESSAGE
          </SubmitBtn>
        </Form>
        <ContactEmail>
          <EmailIcon />
          <p>jdanielsemine@gmail.com</p>
        </ContactEmail>
      </ContactCard>
    </StyledContactSection>
  );
};

const ContactEmail = styled.div`
  position: absolute;
  bottom: 4rem;
  left: 4rem;

  display: flex;
  align-items: center;
  gap: 1rem;
  z-index: 5;

  svg {
    display: inline-block;
  }
`;

const SubmitBtn = styled(motion.button)`
  grid-column: 1/-1;
  justify-self: end;

  padding: 1.5rem 2.5rem;
  color: #fff;
  background-color: ${(p) => p.theme.primaryColor100};
  border-radius: 10rem;
  box-shadow: 0 0.5rem 2rem ${(p) => p.theme.boxShadow200};

  margin-top: 2rem;
`;

const Form = styled(motion.form)`
  position: relative;
  display: grid;

  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 6rem 23rem;
  align-items: end;
  column-gap: 3rem;
  row-gap: 2rem;
  z-index: 2;

  @media only screen and (max-width: 44em) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 6rem) 23rem;
  }

  .message {
    grid-column: 1/-1;
  }

  label {
    display: block;
    margin: 0 0 0.5rem 1.5rem;

    transition: all 0.3s;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    border-radius: 7px;
    box-shadow: 0 0.5rem 1rem ${(p) => p.theme.boxShadow100};
    padding: 1rem 1.5rem;
    overflow: hidden;
    order: 1;
  }

  textarea {
    overflow-y: visible;
  }

  input:placeholder-shown + label,
  textarea:placeholder-shown + label {
    transform: translateY(3.2rem);
    font-size: 1.4rem;
    opacity: 0;
    visibility: hidden;
  }

  .input {
    display: flex;
    flex-direction: column;
  }
`;

const ContactCard = styled(motion.div)`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;

  background-color: #fff;
  border-radius: 3rem;
  width: 100%;
  min-height: 50rem;
  padding: 5rem 10rem;
  box-shadow: 0 2rem 4rem ${(props) => props.theme.boxShadow100};

  overflow: hidden;

  @media only screen and (max-width: 51em) {
    padding: 5rem;
  }

  @media only screen and (max-width: 44em) {
    padding: 14rem 5rem 10rem;
  }

  @media only screen and (max-width: 27em) {
    padding: 14rem 2rem 10rem;
  }

  h1 {
    position: relative;
    color: ${(props) => props.theme.black};

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);

      width: 7rem;
      height: 2px;
      background-color: ${(props) => props.theme.primaryColor100};
    }
  }
  > svg {
    position: absolute;
    top: 0;
    left: 0;

    @media only screen and (max-width: 44em) {
      //260 182
      width: 30rem;
      height: 21rem;
    }
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
  padding-top: 2rem;

  @media only screen and (max-width: 64em) {
    grid-column: col-start 1 / col-end 8;
    padding: 8rem 2rem;
  }

  .title-faint {
    font-size: 2.4rem;
    color: #b3b8c0;
  }
`;

export default ContactSection;
