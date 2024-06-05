import styled from "styled-components";
import Title from "/src/components/ui/title/title";
import { Section, Ul, Li } from "/src/components/styled";
import orderLeft from "/src/assets/order-left.svg";
import orderRight from "/src/assets/order-right.svg";
import Button from "/src/components/ui/button/button";

export const StyledSection = styled(Section)`
  padding: 100px ${(props) => props.theme.paddingPage} 80px;
  background-color: ${(props) => props.theme.colorLiteBg};
  background-image: url(${orderLeft}), url(${orderRight});
  background-repeat: no-repeat;
  background-position: left bottom, right 90px center;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 24px;
`;

export const Fieldset = styled.fieldset`
  margin: 0;
  margin-bottom: 24px;
  padding: 0;
  border: 0;
`;

export const StyledUl = styled(Ul)`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const StyledLi = styled(Li)`
  // margin-bottom: 24px;
`;

export const RadioLabelForTime = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  ${(props) =>
    props.$isChecked
      ? `background-color: ${props.theme.colorButton};
         color: ${props.theme.colorWhite}`
      : `background-color: ${props.theme.colorLiteGrey}`};
  border-radius: 8px;
  cursor: pointer;
  transition: color 0.2s ease-out, background-color 0.2s ease-out;
`;

export const RadioLabelForType = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  cursor: pointer;

  &::before {
    content: "";
    display: block;
    width: 18px;
    height: 18px;
    border: 1px solid ${(props) => props.theme.colorButton};
    border-radius: 9px;
  }

  ${(props) =>
    props.$isChecked &&
    `
      &::after {
        content: "";
        position: absolute;
        left: 3px;
        display: block;
        width: 12px;
        height: 12px;
        background-color: ${props.theme.colorButton};
        border-radius: 6px;
      }`}
`;

export const StyledPrice = styled.span`
  margin-bottom: 40px;
  font-size: 24px;
  line-height: 28px;
  font-weight: 700;
`;

export const StyledButton = styled(Button)`
  width: 100%;
  margin-top: 40px;
`;
