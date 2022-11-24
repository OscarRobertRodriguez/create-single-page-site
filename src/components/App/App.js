import {useState} from 'react'; 
import GlobalStyles from "../../constants";
import styled from "styled-components";
import ListItem from "../ListItem/ListItem";
import Header from "../Header/Header";
import Modal from '../Modal/Modal';
import useWindowDimensions from "../../hooks/use-window-dimensions.hook";

function App() {
  const {width} = useWindowDimensions();
  const [open, setOpen] =  useState(false); 

  


  return (
    <Wrapper>
      <Header width={width} setOpen={setOpen} open={open} />
      <ListItem itemNum={1}>
        <h4>Brand Strategy</h4>
        <p>
          Brand strategy is critical for long-term success. Outshining
          competitors and capturing the target audience are key.
        </p>
      </ListItem>
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
  background-color: var(--red);
  padding: 0 24px;
  padding-top: 178px;
`;


