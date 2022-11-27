import {useState, useEffect} from 'react'; 
import GlobalStyles from "../../constants";
import styled from "styled-components";
import ListItem from "../ListItem/ListItem";
import Header from "../Header/Header";
import Modal from '../Modal/Modal';
import Hero from '../Hero/Hero';
import { QUERIES } from '../../constants';
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
      <Hero width={width} />
      <Modal open={open}>modal</Modal>
      <GlobalStyles />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
position: relative;
  min-height: 100%;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 24px;
  padding-top: 120px;
  overflow: hidden;


  @media ${QUERIES.tabletAndUp} {
    padding-top: 178px;
    padding-left: 0;
    padding-right: 40px;
  }

  @media ${QUERIES.desktopAndUp} {
    padding-left: 0;
    padding-right: 0;
}
`;


