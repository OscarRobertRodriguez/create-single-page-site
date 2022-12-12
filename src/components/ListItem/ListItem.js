import React from "react";
import styled from "styled-components";
import { QUERIES } from "../../constants";




function ListItem({ itemNum, title, content}) {
  return (
    <Wrapper>
      <ItemNum>{formatItemNumber(itemNum)}</ItemNum>
      <ContentWrapper>
        <h4>{title}</h4>
        <p>{content}</p>
      </ContentWrapper>
    </Wrapper>
  );
}

export default ListItem;

const Wrapper = styled.li`
position: relative;
  list-style: none;
  width: 100%;
  height: 159px;


  @media ${QUERIES.tabletAndUp} {
     width: 355px;
    }


    @media ${QUERIES.desktopAndUp} {
      width: 504px;
      height: 196px;
     
    }

`;


const ItemNum = styled.span`
  font-size: var(--80px);
  color: var(--white);
  opacity: .25;
  font-weight: var(--extra-bold);
  line-height: 88px;
  position: absolute;
`; 

const ContentWrapper = styled.div`
    width: 100%;
    max-width: 311px;
    min-height: 115px;
    padding-left: 16px;
    padding-top: 44px;



    @media ${QUERIES.tabletAndUp} {
     max-width: 355px;

    }

    @media ${QUERIES.desktopAndUp} {
     max-width: 445px;
     height: 152px;
    }

    
    
  
   p {
    color: var(--white);
    font-size: var(--15px);
    line-height: 25px;
    font-weight: 400;
    padding-top: 15px;

    @media ${QUERIES.desktopAndUp} {
    font-size: var(--18px);
    line-height: 32px;
    }
   }
` ;



// functions
function formatItemNumber(num) {
  if(num < 0 ) return 
  if(num <= 9) {
     return `0${num}`; 
  } 
  return num; 
}