import {useState, useEffect} from 'react'; 
import GlobalStyles from "../../constants";
import styled from "styled-components";
import ListItem from "../ListItem/ListItem";
import Header from "../Header/Header";
import Modal from '../Modal/Modal';
import Hero from '../Hero/Hero';
import { QUERIES } from '../../constants';
import mobileImg from "../../assets/mobile/image-hero.jpg";
import useWindowDimensions from "../../hooks/use-window-dimensions.hook";

function App() {
  const {width} = useWindowDimensions();
  const [open, setOpen] =  useState(false); 


  useEffect(() => {
     
    if (width >= 768 && open !== false) {
      setOpen(prev => !prev)
    }
  

  }, [width, open])
  



  return (
    <Wrapper>
      <Header width={width} setOpen={setOpen} open={open} />
      <Hero  width={width} />
      <Modal open={open}>modal</Modal>
    
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





  /* width: 100%; */
  /* max-width: 1440px; */
  /* margin: 0 auto; */
  /* padding: 0 24px; */
  /* padding-top: 120px; */
  /* overflow: hidden; */





   /* & .full-bleed {
     grid-column: 1 / -1;
     margin-left: calc(var(--breathing-room) * -1); 
  margin-right: calc(var(--breathing-room) * -1); 
   } */



  @media ${QUERIES.tabletAndUp} {
    /* padding-top: 178px; */
    /* padding-left: 0; */
    /* padding-right: 40px; */
    padding-right: 0;
  }

  @media ${QUERIES.desktopAndUp} {
  padding-right: 0;
}


& > *  {
       grid-column: 2;

   }
`;


