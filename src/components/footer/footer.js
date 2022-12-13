import React from "react";
import styled from "styled-components";
import { QUERIES } from "../../constants";
import Button from "../Button/Button";
import DecorationImg from '../../assets/desktop/bg-pattern-wave-red.svg';

function footer() {
  return (
    <Wrapper>
      <h2>Let's build something great together</h2>
      <Button>schedule <span>a</span> call</Button>
      <img src={DecorationImg} alt='decoration' />
    </Wrapper>
  );
}

export default footer;


 export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 47px;
  padding-top: 100px;
  padding-bottom: 100px;
  width: 100%;
  position: relative;

  img {
    display: none;
  }

  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
    justify-content: space-between;
    padding-left:  var(--indoor-breathing-room); 
   padding-right: var(--indoor-breathing-room); 

    h2{
      width: 398px;
    }
   
}

 
  @media ${QUERIES.desktopAndUp} {
 
   gap: initial;
   justify-content: space-between;
   align-items: center;

   img {
    display: block;
    position: absolute;
    left: -65px;
   }

   h2 {
    width: 635px;
   }
}
`;