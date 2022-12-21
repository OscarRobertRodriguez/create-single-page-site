import React from "react";
import styled from "styled-components";
import { QUERIES } from "../../constants";

function ControlButton({ control, onClick}, props ) {
  return (
    <Wrapper data-carousel-button={control}  onClick={onClick}>
      <SVG width="40" height="40"   xmlns="http://www.w3.org/2000/svg">
        {control === "next" ? (
          <g stroke="#F94F4F"  fill-rule="evenodd">
            <circle cx="20" cy="20" r="19.5" />
            <path stroke-width="2" d="M17.5 15l5 5-5 5" />
          </g>
        ) : (
          <g
            transform="matrix(-1 0 0 1 40 0)"
            stroke="#F94F4F"

            fillRule="evenodd"
          >
            <circle cx="20" cy="20" r="19.5" />
            <path stroke-width="2" d="M17.5 15l5 5-5 5" />
          </g>
        )}
      </SVG>
    </Wrapper>
  );
}

export default ControlButton;

const Wrapper = styled.button`
   background-color: transparent;
   border: none;
   cursor: pointer;
`;


const SVG = styled.svg`
   
   & g {
    transition: 200ms all ease-in-out;
     :hover {
      stroke: var(--red-hover);
     }
   }

`; 