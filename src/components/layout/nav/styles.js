import styled from "styled-components";
import Button from "/src/components/ui/button/button";

export const StyledButton = styled(Button)`
  color: ${(props) => props.theme.colorTextBase};
  border-radius: 0;
  background: transparent;

  &:hover,
  &:focus {
    box-shadow: none;
    background: transparent;
    opacity: 0.6;
  }

  &:active {
    opacity: 0.3;
  }
`;
