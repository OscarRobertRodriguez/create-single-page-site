import React from "react";
import styled from "styled-components";
import { QUERIES } from "../../constants";
import ListItem from "../ListItem/ListItem";

const data = [
  {
    item: 1,
    title: "brand strategy",
    content:
      "Brand strategy is critical for long-term success. Outshining competitors and capturing the target audience are key.",
  },
  {
    item: 2,
    title: "brand design",
    content:
      "Keeping the brand design unique and meaningful helps in communicating the brand’s value effectively.",
  },

  {
    item: 3,
    title: "web design",
    content:
      "A beautifully crafted website is the best tool for brand awareness, and ultimately results in increased revenues.",
  },
];

function List({width}) {
  return (
    <Wrapper className={width < 768 ?'full-bleed' : null}>
      <h2>Our approach for creating a winning brand</h2>
      <ListItemsWrapper>
     {
      data.map(({item, title, content}) => 
         <ListItem  itemNum={item} title={title} content={content}/ >
     )}
     </ListItemsWrapper>
    </Wrapper>
  );
}

export default List;

const Wrapper = styled.div`
  height: 918px;
  background-color: var(--red);
  padding-left: var(--indoor-breathing-room);
  padding-right: var(--indoor-breathing-room);
  padding-top: 96px;
  padding-bottom: 96px;

  @media ${QUERIES.tabletAndUp} {
    height: 797px;
  grid-column: 2/-1;
  grid-row: 2/4;
  padding-top: 120px;
  padding-bottom: 120px;


}

@media ${QUERIES.desktopAndUp} {
  height: 1100px;
  width: 895px;
  padding-top: 200px;
  padding-bottom: 200px;
  padding-right: var(--indoor-right-desktop-breathing-room);
  padding-left: 285px;
}

  h2 {
    color: var(--white);
    transition: .2s all;
    padding-bottom: 40px;

    @media ${QUERIES.tabletAndUp} {
    color: var(--text-black);
    width:281px;
    position: absolute;
    bottom: 28%;
    left: 40px;
}

@media ${QUERIES.desktopAndUp} {
   width: 540px;
   height: 192px;
   bottom: 31%;
   left: 160px
}
  }
`;

var ListItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media ${QUERIES.tabletAndUp} {
   gap: 56px;
}
`; 