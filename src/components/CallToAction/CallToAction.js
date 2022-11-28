import React from "react";
import styled from "styled-components";
import { QUERIES } from "../../constants";
import Img1 from "../../assets/mobile/image-strategic.jpg";
import WaveRedImg from "../../assets/desktop/bg-pattern-wave-red.svg";

function CallToAction() {
  return (
    <Wrapper>
      <ImgWrapper>
        <img src={Img1} alt="call to action" />
      </ImgWrapper>
      <Wave src={WaveRedImg} alt="style icon" />
      <ContentWrapper>
        <h2>Design is strategic</h2>
        <p>
          A well-crafted design strategy consistently produces desired outcomes
          and brand awareness. We are firm believers that success lies in
          creative collaboration with our clients.
        </p>
      </ContentWrapper>
    </Wrapper>
  );
}

export default CallToAction;

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
`;

const ImgWrapper = styled.div`
  margin: 0 -24px;
  width: 100%;
  position: absolute;

  @media ${QUERIES.tabletAndUp} {
   margin: 0;
}

  img {
    display: block;
    height: 200px;
    width: 100%;
    object-fit: fill;
  }
`;

const Wave = styled.img`
  width: 63px;
  height: 29px;
  position: absolute;
  top: 185px;
`;


const ContentWrapper = styled.div`
  width: 100%;
  background-color: var(--bg-black);
 height: 377px;
 margin: 0 -24px;
 margin-top: 200px;
 color: var(--white);
`;