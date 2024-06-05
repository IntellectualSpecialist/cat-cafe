import React, { forwardRef } from "react";
import { StyledButton } from "./styles";

const Button = forwardRef(
  ({ children, minWidth, className, link, ...props }, ref) => {
    return (
      <StyledButton
        ref={ref}
        $minWidth={minWidth}
        {...(link ? { to: link } : { as: "button", type: "button" })}
        className={`${className}`}
        {...props}
      >
        {children}
      </StyledButton>
    );
  }
);

export default Button;
