import React from "react";
import styled from "styled-components";
import UnderlineButton from "../UnderlineButton/UnderlineButton";
import Img1 from "../../assets/mobile/image-strategic.jpg";
import decoration from '../../assets/desktop/bg-pattern-wave-red.svg';

import { QUERIES } from "../../constants";

function StrategyCard() {
  return (
    <Wrapper className="full-bleed">
      <ImgWrapper>
        <Img src={Img1} alt="image for strategy" />
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

const Wrapper = styled.div``;

const ImgWrapper = styled.div`
  width: 100%;
`;

const Img = styled.img`
 object-fit: cover;
 width: 100%;
`;

const ContentWrapper = styled.div`
  background-color: var(--bg-black);
  height: 377px;
  padding-left: var(--indoor-breathing-room);
  padding-right: var(--indoor-breathing-room);
  padding-top: 72px;
  padding-bottom: 72px;
  position: relative;

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

`; 