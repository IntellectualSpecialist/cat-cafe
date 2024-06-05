import styled from "styled-components";
import { Li } from "/src/components/styled";
import Arrow from "/src/assets/arrow-accordion.svg";

export const StyledLi = styled(Li)`
  padding: 11px 20px 10px;
  background-color: ${(props) => props.theme.colorLiteGrey};
  margin-bottom: 8px;
  border-radius: 10px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const StyledButton = styled.button`
  position: relative;
  width: 16px;
  height: 16px;
  background: transparent;
  border: none;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: -2px;
    left: -2px;
    width: 16px;
    height: 16px;
    background-image: url("${Arrow}");
    transition: transform 0.2s ease-out;
    ${(props) => props.open && `transform: rotate(180deg);`}
  }
`;

export const Wrapper = styled.div`
  height: ${(props) => `${props.open ? props.height : 0}px`};
  overflow: hidden;
  transition: height 0.2s ease-out;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  padding-top: 10px;
`;

export const Text = styled.p`
  font-size: 14px;
  line-height: 21px;

  & ul {
    margin: 0;
    margin-top: 8px;
    padding: 0;
    padding-left: 16px;
    padding-bottom: 10px;
    list-style-type: none;
  }

  & li {
    position: relative;
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: -16px;
      width: 8px;
      height: 8px;
      background-color: ${(props) => props.theme.colorTextBase};
      transform: translateY(-50%);
      border-radius: 4px;
    }
  }
`;
