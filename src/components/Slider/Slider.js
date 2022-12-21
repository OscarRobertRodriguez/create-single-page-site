import React from "react";
import styled from "styled-components";
import { QUERIES } from "../../constants";
import slide1 from "../../assets/mobile/image-slide-1.jpg";
import slide2 from "../../assets/mobile/image-slide-2.jpg";
import slide3 from "../../assets/mobile/image-slide-3.jpg";
import decorImg from "../../assets/desktop/bg-pattern-wavy-white.svg";
import ControlButton from "../ControlButton/ControlButton";
import nextIcon from "../../assets/desktop/icon-arrow-next.svg";
import previousIcon from "../../assets/desktop/icon-arrow-previous.svg";
import Overlay from "../Overlay/Overlay";
import mobileImg1 from "../../assets/mobile/image-slide-1.jpg";
import tabletImg1 from "../../assets/tablet/image-slide-1.jpg";
import desktopImg1 from "../../assets/desktop/image-slide-1.jpg";
import mobileImg2 from "../../assets/mobile/image-slide-2.jpg";
import tabletImg2 from "../../assets/tablet/image-slide-2.jpg";
import desktopImg2 from "../../assets/desktop/image-slide-2.jpg";
import mobileImg3 from "../../assets/mobile/image-slide-3.jpg";
import tabletImg3 from "../../assets/tablet/image-slide-3.jpg";
import desktopImg3 from "../../assets/desktop/image-slide-3.jpg";

const slideCarousel = (e) => {
  const button = e.currentTarget;
  const buttonValue = button.getAttribute("data-carousel-button");

  console.log(buttonValue);


  const offset = buttonValue === "next" ? 1 : -1;
  const panes = button.closest("[data-slider]").querySelector("[data-panes]");
  const titles = button.closest('[data-slider]').querySelector('[data-titles]');


  const activeSlide = panes.querySelector("[data-active]");
  const activeTitle = titles.querySelector("[data-activetitle]");
  let newIndex = [...panes.children].indexOf(activeSlide) + offset;

  if (newIndex < 0) newIndex = panes.children.length - 1;
  if (newIndex >= panes.children.length) newIndex = 0;

  panes.children[newIndex].dataset.active = true;
  titles.children[newIndex].dataset.activetitle = true; 
  delete activeSlide.dataset.active; 
  delete activeTitle.dataset.activetitle;
};

function Slider({ width }) {
  return (
    <Wrapper className="full-bleed" data-slider>
      <input type="radio" name="gallery" id="1" defaultChecked />
      <input type="radio" name="gallery" id="2" />
      <input type="radio" name="gallery" id="3" />
      <img className="decoration" src={decorImg} alt="background decoration" />

      <PanesWrapper data-panes>
        <Pane className="pane" data-active id="pane1">
          {width < 768 ? (
            <img src={mobileImg1} alt="hero img" />
          ) : width < 1100 ? (
            <img src={tabletImg1} alt="hero img" />
          ) : (
            <img src={desktopImg1} alt="hero img" />
          )}
          <Overlay name={"Lean Product Roadmap"} year={"2019"} />
        </Pane>
        <Pane className="pane" id="pane2">
          {width < 768 ? (
            <img src={mobileImg2} alt="hero img" />
          ) : width < 1100 ? (
            <img src={tabletImg2} alt="hero img" />
          ) : (
            <img src={desktopImg2} alt="hero img" />
          )}
          <Overlay name={"new majestic hotel"} year={"2018"} />
        </Pane>
        <Pane className="pane" id="pane3">
          {width < 768 ? (
            <img src={mobileImg3} alt="hero img" />
          ) : width < 1100 ? (
            <img src={tabletImg3} alt="hero img" />
          ) : (
            <img src={desktopImg3} alt="hero img" />
          )}
          <Overlay name={"Crypto Dashboard"} year={"2016"} />
        </Pane>
      </PanesWrapper>

      <ContentWrapper>
        <TitlesWrapper data-titles>
          <h2 className="title" data-activetitle>
            Brand naming & guidelines
          </h2>
          <h2 className="title">Brand identity & merchandise</h2>
          <h2 className="title">Brand identity & webdesign</h2>
        </TitlesWrapper>

        <ControlsWrapper>
          <Controls className="activeControls" data-pos="1">

            <ControlButton control={'prev'} onClick={slideCarousel} />
            <ControlButton control={'next'}  onClick={slideCarousel} />

          </Controls>
        </ControlsWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

export default Slider;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 0.5fr;
  position: relative;

  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 0.86fr 60px 1fr;
  }

  @media ${QUERIES.desktopAndUp} {
    grid-template-columns: 0.86fr 190px 1fr;
    grid-template-rows: 1fr;
    height: 728px;
  }

  .decoration {
    display: none;
    transition: all 0.2s;

    @media ${QUERIES.tabletAndUp} {
      display: block;
      position: absolute;
      left: 46%;
      top: 120px;
      width: 62px;
      height: 28px;
      transform: scaleX(-1);
      z-index: 99;
    }

    @media ${QUERIES.desktopAndUp} {
      width: 134px;
      height: 60px;
      top: 190px;
      transform: initial;
    }
  }
  input {
    visibility: hidden;
    position: absolute;
  }

  input#radio3:checked ~ .title3 {
    display: block;
  }
`;

const PanesWrapper = styled.ul`
  width: 100%;
  grid-row: 1 /2;
  padding: 0;
  position: relative;
  height: 404px;

  @media ${QUERIES.tabletAndUp} {
    grid-column: 2/4;
    grid-row: 1/3;
  }

  @media ${QUERIES.desktopAndUp} {
    width: 895px;
  }

  .noShow {
    display: none;
  }

  .active {
    display: block;
  }
`;

const Pane = styled.li`
  height: 404px;
  width: 100%;
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: 200ms opacity ease-in-out;
  transition-delay: 200ms;

  &[data-active] {
    opacity: 1;
    transition-delay: 0ms;
    z-index: 2;
  }

  @media ${QUERIES.tabletAndUp} {
    height: 472px;
  }

  @media ${QUERIES.desktopAndUp} {
    height: 728px;


  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;



const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  height: 100%;
  background-color: var(--bg-black);
  grid-row: 2/3;
  padding-left: var(--indoor-breathing-room);
  padding-right: var(--indoor-breathing-room);
  padding-top: 64px;
  padding-bottom: 64px;
  z-index: 10;

  @media ${QUERIES.tabletAndUp} {
    height: 352px;
    grid-column: 1/3;
    grid-row: 1/2;
    justify-content: center;
  }

  @media ${QUERIES.desktopAndUp} {
    height: 528px;
    width: 735px;
    gap: 50px;
  }

  .active {
    display: block;
  }

  .activeControls {
    display: flex;
  }

  .noShow {
    display: none;

    label {
      pointer-events: none;
    }
  }

  h2 {
    color: var(--white);
    width: min(350px, 100%);
    position: absolute;
    opacity: 0;
    transform: translate(-150%);
    transition: 600ms transform ease-in-out, 200ms opacity ease-in-out;


    

    &[data-activetitle] {
     opacity: 1;
     transform: translate(0%);
  }

    @media ${QUERIES.desktopAndUp} {
      width: 445px;
    }
  }
`;

const TitlesWrapper = styled.div`
 position: relative;
 height: 128px;
 width:445px;
`

const ControlsWrapper = styled.div``;

const Controls = styled.div`
  display: flex;
  gap: 20px;

  label {
    width: 40px;

    :hover {
      background-color: var(--red-hover);
      cursor: pointer;
    }
  }
`;

// {/* <Pane>
// <img src={slide2} alt='first gallery'/>
// </Pane>

// <Pane>
// <img src={slide3} alt='first gallery'/>
// </Pane> */}
