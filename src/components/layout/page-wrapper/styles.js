import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100%;
  width: ${(props) => props.theme.pageWidth};
  margin: 0 auto;
`;

export const StyledMain = styled.main`
  flex-grow: 1;
`;
