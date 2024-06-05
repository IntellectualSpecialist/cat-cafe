import styled from "styled-components";
import StarFeature from "../star-feature/star-feature";
import Title from "/src/components/ui/title/title";
import { Img } from "/src/components/styled";

export const StyledFigure = styled.figure`
  position: relative;
  margin: 0;
  margin-bottom: ${(props) => props.theme.indent};
`;

export const StyledFeature = styled(StarFeature)`
  position: absolute;
  top: 0;
  left: 0;
`;

export const StyledTitle = styled(Title)`
  margin-bottom: 12px;
`;

export const StyledImage = styled(Img)`
  border-radius: 8px;
`;

export const Text = styled.p`
  margin: 0;
`;
