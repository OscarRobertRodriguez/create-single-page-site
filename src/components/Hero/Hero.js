import React from "react";
import styled from "styled-components";
import mobileImg from "../../assets/mobile/image-hero.jpg";
import tabletImg from "../../assets/tablet/image-hero.jpg";
import desktopImg from "../../assets/desktop/image-hero.jpg";
import Button from "../Button/Button";
import { QUERIES } from "../../constants";

function Hero({ width }) {
  return (
    <Wrapper>
      {width < 768 ? (
        <ImgWrapper className="full-bleed">
          <img src={mobileImg} alt="hero img" />
        </ImgWrapper>
      ) : width < 1100 ? (
        <ImgWrapper>
          <img src={tabletImg} alt="hero img" />
        </ImgWrapper>
      ) : (
        <ImgWrapper>
            <img src={desktopImg} alt="hero img" />
        </ImgWrapper>
       
      )}

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
  width: 100%;

  @media ${QUERIES.tabletAndUp} {
    display: grid;
    grid-template-columns: 0.43fr .57fr;
    height: 606px;
  }

  @media ${QUERIES.laptopAndUp} {
  }

  @media ${QUERIES.desktopAndUp} {
    height: 800px;
    grid-template-columns: 0.7fr 0.33fr 1fr;
  }
`;

const ImgWrapper = styled.div`


   img {
    object-fit: cover;
    width: 100%;
    max-height: 325px;

    @media ${QUERIES.tabletAndUp} {
      height: 100%;
      max-height: initial;
      object-fit: cover;
      object-position: 70% center;
      max-height: initial;
    }
  }

  @media ${QUERIES.tabletAndUp} {
    grid-column: 2 / -1;
    grid-row: 1/2;
    height: 606px;
  }

  @media ${QUERIES.laptopAndUp} {
    grid-column: 2/-1;
    margin: 0;
    height: 800px;
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
    padding-left: var(--indoor-breathing-room);
    height: 606px;
  }

  @media ${QUERIES.laptopAndUp} {
    position: absolute;
    width: 730px;
  }

  @media ${QUERIES.desktopAndUp} {
    position: absolute;
    max-width: initial;
    width: 730px;

    h1 {
      width: 730px;
    }

    p {
      width: 540px;
    }
  }
`;
