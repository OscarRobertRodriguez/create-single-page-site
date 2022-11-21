import GlobalStyles from "../../constants";
import styled from "styled-components";
import Button from "../Button/Button";
import UnderlineButton from "../UnderlineButton/UnderlineButton";

function App() {
  return (
    <Wrapper>
    <Button hover={`var(--red-hover)`} bgColor={`var(--red)`}>Hello</Button>
     <UnderlineButton>l</UnderlineButton>
     <GlobalStyles />
    </Wrapper>
  );
}

export default App;


const Wrapper = styled.div`
 min-height: 100%;
 width: 100%;
 max-width: 1440px;
 margin: 0 auto;

`; 