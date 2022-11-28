import React from "react";
import styled from "styled-components";
import mobileImg from "../../assets/mobile/image-hero.jpg";
import desktopImg from '../../assets/desktop/image-hero.jpg';
import Button from "../Button/Button";
import { QUERIES } from "../../constants";

function Hero({width}) {
  return (
    <Wrapper>
      <ImgWrapper>
      {  
        width < 768 ? <img src={mobileImg} alt='hero img' /> : <img src={desktopImg} alt='hero img' />
      }  
      </ImgWrapper>
      <ContentWrapper>
          <h1>Branding & website design agency</h1>
          <p>
            We specialize in visual storytelling by creating cohesive brand and
            website design solutions for small businesses, giving lasting
            impressions to audiences in a digital world.
          </p>

          <Button>Learn More</Button>
        </ContentWrapper>
    </Wrapper>
  );
}

export default Hero;

export const Wrapper = styled.div`


@media ${QUERIES.tabletAndUp} {
   display: grid;
   grid-template-columns: 0.7fr .33fr .67fr;
  /* height: 606px; */
}

@media ${QUERIES.laptopAndUp} {
}

@media ${QUERIES.desktopAndUp} {
   height: 800px;
   /* margin: 0  -24px; */
}

`;

const ImgWrapper = styled.div`
  margin: 0 -24px;


  @media ${QUERIES.tabletAndUp} {
  grid-column: 2 / -1;
  grid-row: 1/2;
  height: 100%;
  margin-left: 9px;
  margin-right: -40px;
}

@media ${QUERIES.desktopAndUp} {
  margin: 0;
}

  & img {
    display: block;
    width: 100%;
    max-height: 325px;


    @media ${QUERIES.tabletAndUp} {
    height: 100%;
    max-height: initial;
    object-fit: cover;
    object-position: 70% center;
}
  }
`;

const ContentWrapper = styled.div`
padding-top: 56px;
padding-bottom: 96px;
display: flex;
 flex-direction: column;
 gap: 25px;

 max-width: 500px;




 @media ${QUERIES.tabletAndUp} {
  grid-row: 1/2;
  grid-column: 1/3;
  z-index: 99;
  width: 430px;
  gap: 32px;
  padding-top: 77px;
   padding-bottom: 150px;
   max-width: initial;
   padding-left: 40px;
  }

  @media ${QUERIES.laptopAndUp} {
   width: 650px;
   padding-left: 165px;

}

@media ${QUERIES.desktopAndUp} {
  padding-left: 165px;
  width: 780px;
}

`;


