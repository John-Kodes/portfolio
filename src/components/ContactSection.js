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
        <Form
          action="https://formsubmit.co/3d78e4b8b90cd7abe0848380f531de17 "
          method="POST"
        >
          <div className="fullname">
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

          <div className="email">
            <input type="email" name="email" placeholder="Email" required />
            <label htmlFor="email">Email</label>
          </div>

          <div className="subject">
            <input type="text" name="subject" placeholder="Subject" />
            <label htmlFor="subject">Subject</label>
          </div>

          <div className="message">
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

          <SubmitBtn type="submit">SEND MESSAGE</SubmitBtn>
        </Form>
      </ContactCard>
    </StyledContactSection>
  );
};

const SubmitBtn = styled(motion.button)`
  grid-column: 3;
  justify-self: center;

  padding: 1.5rem 2.5rem;
  color: #fff;
  background-color: ${(p) => p.theme.primaryColor100};
  border-radius: 10rem;
  box-shadow: 0 0.5rem 2rem ${(p) => p.theme.boxShadow300};
`;

const Form = styled(motion.form)`
  display: grid;

  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 6rem 23rem;
  align-items: end;
  column-gap: 3rem;
  row-gap: 4rem;
  z-index: 2;

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
    box-shadow: 0 0.5rem 2rem ${(p) => p.theme.boxShadow100};
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

  > div {
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
  box-shadow: 0 2rem 4rem ${(props) => props.theme.boxShadow200};

  overflow: hidden;

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
