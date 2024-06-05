import styled from "styled-components";
import Nav from "/src/components/layout/nav/nav";

export const StyledHeader = styled.header`
  position: relative;
  padding: 10px ${(props) => props.theme.paddingPage};
  display: flex;
  align-items: center;
  box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.04), 0 0 2px 0 rgba(0, 0, 0, 0.06),
    0 4px 8px 0 rgba(0, 0, 0, 0.04);
  background-color: ${(props) => props.theme.colorWhite};
`;

export const StyledNav = styled(Nav)`
  margin-left: auto;
`;
