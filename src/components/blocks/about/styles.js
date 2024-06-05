import styled from "styled-components";
import { Section } from "/src/components/styled";
import aboutImage from "/src/assets/about.svg";
import mapMark from "/src/assets/map-mark.svg";

const Paragraph = styled.p`
  margin: 0;
`;

export const StyledSection = styled(Section)`
  padding-top: 159px;
  padding-bottom: 159px;
  background-color: ${(props) => props.theme.colorLiteBg};
  background-repeat: no-repeat;
  background-position: center right ${(props) => props.theme.paddingPage};
  background-image: url(${aboutImage});

  .about__title {
    margin-bottom: ${(props) => props.theme.indent};
  }
`;

export const AboutWrapper = styled.div`
  max-width: 597px;
`;

export const Text = styled(Paragraph)`
  max-width: 539px;
  margin-bottom: 40px;
`;

export const WorkTime = styled(Paragraph)`
  width: fit-content;
  margin-bottom: ${(props) => props.theme.indent};
  padding: 8px;
  background-color: ${(props) => props.theme.colorDarkBg};
  border-radius: 8px;
`;

export const Address = styled.address`
  position: relative;
  padding-left: 24px;
  font-style: normal;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 16px;
    height: 16px;
    transform: translateY(-50%);
    background-image: url(${mapMark});
  }
`;
