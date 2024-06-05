import React, { useState, useEffect, useRef } from "react";
import {
  StyledButton,
  ContentWrapper,
  TitleWrapper,
  Wrapper,
  Text,
} from "./styles";

function AccordionItem({ title, text, open, onClick, isHtml }) {
  const [height, setHeight] = useState(0);
  const contentWrapper = useRef(null);
  useEffect(() => {
    setHeight(contentWrapper.current.offsetHeight);
  }, [text]);
  return (
    <>
      <TitleWrapper>
        {title}
        <StyledButton type="button" open={open} onClick={onClick} />
      </TitleWrapper>
      <Wrapper height={height} open={open}>
        <ContentWrapper ref={contentWrapper}>
          {isHtml ? (
            <Text dangerouslySetInnerHTML={{ __html: text }} />
          ) : (
            <Text>{text}</Text>
          )}
        </ContentWrapper>
      </Wrapper>
    </>
  );
}

export default AccordionItem;
