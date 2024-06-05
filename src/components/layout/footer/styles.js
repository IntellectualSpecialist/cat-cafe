import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  padding: 19px ${(props) => props.theme.paddingPage} 18px;
`;

export const StyledCopyright = styled.span`
  display: block;
  padding: 8px 12px;
  margin-left: auto;
  font-size: ${(props) => props.theme.fontSizeDefault};
  background-color: ${(props) => props.theme.colorLiteBg};
  border-radius: 8px;
`;
