import React from "react";
import styled from "styled-components";
import { QUERIES } from "../../constants";

function Button({width, height, bgColor, hover, fs, children}) {
  return (
    <Wrapper style={{
      "--width": width,
      "--height": height, 
      "--bgColor": bgColor,
      "--hover": hover,   
      "--fontSize": fs
    }}>
    {children}
    </Wrapper>
  );
}





const Wrapper = styled.button`
    background-color: var(--bgColor, var(--bg-black));
    width: var(--width, 199px ); 
    height: var(--height, 64px);
    color: var(--white);
    font-weight: var(--extra-bold);
    font-size: var(--fontSize, var(--16px));
    line-height: 20px;
    border: none;
    padding: 0;
    cursor: pointer;

 
    &:hover {
      background-color: var(--hover, --black-hover);

    }


`; 

export default Button;