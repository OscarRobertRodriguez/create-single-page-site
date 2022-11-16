import GlobalStyles from "../../constants";
import styled from "styled-components";

function App() {
  return (
    <Wrapper>
     <h1>Hello</h1>
     <GlobalStyles />
    </Wrapper>
  );
}

export default App;


const Wrapper = styled.div`
 min-height: 100%;
 width: 100%;
 max-width: 1440px;
 background-color: red;
 margin: 0 auto;
`; 