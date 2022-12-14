import { useState, useEffect } from "react";
import GlobalStyles from "../../constants";
import styled from "styled-components";
import Header from "../Header";
import Modal from "../Modal";
import Hero from "../Hero";
import { QUERIES } from "../../constants";
import StrategyCard from "../StrategyCard";
import useWindowDimensions from "../../hooks/use-window-dimensions.hook";
import List from "../List";
import Footer from "../footer";
import Slider from "../Slider";

function App() {
  const { width } = useWindowDimensions();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (width >= 768 && open !== false) {
      setOpen((prev) => !prev);
    }
  }, [width, open]);

  return (
    <Wrapper>
         <Modal open={open} />
        <Header width={width} setOpen={setOpen} open={open} />


      <Hero width={width} />
      <StrategicSection>
        <StrategyCard width={width} />
        <List width={width} />
      </StrategicSection>

      <div>
        <Slider width={width} />
      </div>

      <Footer />
      {/* <Modal open={open}>modal</Modal> */}

      <GlobalStyles />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr min(1440px, 100%) 1fr;
  grid-template-rows: min-content;
  min-height: 100%;
  padding-left: var(--breathing-room);
  padding-right: var(--breathing-room);
  width: 100%;
  overflow: hidden;

  @media ${QUERIES.tabletAndUp} {
    padding-right: 0;
  }

  @media ${QUERIES.desktopAndUp} {
    padding-right: 0;
  }

  & > * {
    grid-column: 2;
  }
`;



const StrategicSection = styled.section`
  @media ${QUERIES.tabletAndUp} {
    display: grid;
    grid-template-columns: 1fr 50px 1.2fr;
    grid-template-rows: 1fr 120px min-content;
    position: relative;
  }
`;
