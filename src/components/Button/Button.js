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
    width: 147px; 
    height: var(--height, 64px);
    color: var(--white);
    font-weight: var(--extra-bold);
    font-size: var(--fontSize, var(--16px));
    line-height: 20px;
    border: none;
    padding: 0;
    cursor: pointer;
    text-transform: capitalize;

    span {
      text-transform: lowercase;
    }
 
    &:hover {
      background-color: var(--hover, var(--black-hover));

    }


    @media ${QUERIES.laptopAndUp} {
      width: var(--width, 199px ); 
    }


`; 

export default Button;