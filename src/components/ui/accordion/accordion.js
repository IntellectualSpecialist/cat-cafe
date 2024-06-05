import React, { useState, useEffect, useRef } from "react";
import AccordionItem from "./accordion-item";
import { Ul } from "/src/components/styled";
import { StyledLi } from "./styles";

function Accordion({ content, isHtml }) {
  const [openItemIndex, setOpenItemIndex] = useState(null);
  return (
    <Ul>
      {content.map((item, index) => (
        <StyledLi key={item.id}>
          <AccordionItem
            title={item.title}
            text={item.description}
            open={index === openItemIndex}
            onClick={() => {
              setOpenItemIndex(index !== openItemIndex ? index : null);
            }}
            isHtml={isHtml}
          />
        </StyledLi>
      ))}
    </Ul>
  );
}

export default Accordion;
