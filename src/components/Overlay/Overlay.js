import React from "react";
import styled from "styled-components";
import { QUERIES } from "../../constants";

function Overlay({name, year}) {
  return  (
    <Wrapper> 
      <ContentWrapper>
      <h3>{name}</h3>
       <span>{year} Project</span>
      </ContentWrapper>

    </Wrapper>
  );
}

export default Overlay;


const Wrapper = styled.div`
     width: 100%;
    height: 100%;
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;

`;

const ContentWrapper = styled.div`
    align-self: end;
    margin-left: auto;
    padding-right : 32px;
    padding-bottom: 35px;
    color: var(--white);
    text-align: end;
    
    h3 {
      text-transform: capitalize;
    }

  @media ${QUERIES.tabletAndUp} {
    padding-right : 40px;
    padding-bottom: 45px;


}


@media ${QUERIES.desktopAndUp} {

 padding-right: 154px;
 padding-bottom: 70px;

}
`;