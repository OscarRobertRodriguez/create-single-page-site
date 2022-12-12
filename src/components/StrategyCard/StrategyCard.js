import React from "react";
import styled from "styled-components";
import UnderlineButton from "../UnderlineButton/UnderlineButton";
import Img1 from "../../assets/mobile/image-strategic.jpg";
import Img2 from '../../assets/tablet/image-strategic.jpg';
import Img3 from '../../assets/desktop/image-strategic.jpg';
import decoration from '../../assets/desktop/bg-pattern-wave-red.svg';

import { QUERIES } from "../../constants";

function StrategyCard({width}) {
  return (
    <Wrapper className="full-bleed">
      <ImgWrapper>
      {
        width < 768 ? <Img src={Img1} alt="image for strategy" />  :
        width > 768 && width < 1100 ?   <Img src={Img2} alt="image for strategy" /> :
        <Img src={Img3} alt="image for strategy" />
      }
      
      </ImgWrapper>
      
      <ContentWrapper>
        <h2>
          <span>Design</span> is Strategic
        </h2>
        <p>
          “A well-crafted design strategy consistently produces desired outcomes
          and brand awareness. We are firm believers that success lies in
          creative collaboration with our clients.”
        </p>
        <UnderlineButton></UnderlineButton>
        <Decoration src={decoration} alt='bg img' />
      </ContentWrapper>

    </Wrapper>
  );
}

export default StrategyCard;

const Wrapper = styled.div`
 

 @media ${QUERIES.tabletAndUp} {
   display: grid;
   grid-template-columns: 1fr 50px 1.2fr;
   grid-template-rows: 1fr 120px;
   grid-row: 1/3;
}

`;

const ImgWrapper = styled.div`
  width: 100%;
  


  @media ${QUERIES.tabletAndUp} {
  grid-column: 1/3;
  grid-row: 1/3;
}
;
`;

const Img = styled.img`
 object-fit: cover;
 width: 100%;
 height:100%;
`;

const ContentWrapper = styled.div`
  background-color: var(--bg-black);
  height: 377px;
  padding-left: var(--indoor-breathing-room);
  padding-right: var(--indoor-breathing-room);
  padding-top: 72px;
  padding-bottom: 72px;
  position: relative; 
  width:100%;
 

  @media ${QUERIES.tabletAndUp} {
  grid-column: 3;
  height: 100%;

}

  @media ${QUERIES.desktopAndUp} {
   display: grid;
   align-content: center;
}

  h2 {
    color: var(--white);
  }

  span {
    color: var(--red);
  }

  p {
    color: var(--white);
    padding-top: 24px;
    padding-bottom: 40px;
  }
`;


const Decoration = styled.img`
  width: 63px;
  height: 29px;
  position: absolute;
  top: -15px;

  @media ${QUERIES.tabletAndUp} {
   left: -35px; 
   top: 200px;
}

@media ${QUERIES.desktopAndUp} {
   width: 135px;
   height: 61px;
   left: -70px;
   top: 220px;
}
`; 