import GlobalStyles from "../../constants";
import styled from "styled-components";
import ListItem from "../ListItem/ListItem";

function App() {
  return (
    <Wrapper>
      <ListItem itemNum={1}>
        <h4>Brand Strategy</h4>
        <p>
          Brand strategy is critical for long-term success. Outshining
          competitors and capturing the target audience are key.
        </p>
      </ListItem>
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
  background-color: var(--red);
  padding: 0 24px;
`;
