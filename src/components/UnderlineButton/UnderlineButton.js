import React from "react";
import styled from "styled-components";
import { QUERIES } from "../../constants";

function UnderlineButton({ children }) {
  return (
    <Wrapper>
      schedule <span>a</span> call
    </Wrapper>
  );
}

export default UnderlineButton;

export const Wrapper = styled.div`
  width: 132px;
  height: 32px;
  font-size: var(--18px);
  font-weight: var(--extra-bold);
  padding: 0;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  text-align: center;
  color: var(--red);
  border-bottom: 2px solid currentColor;
  text-transform: capitalize;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    color: var(--red-hover);
  }

  &:hover span {
      color: var(--red-hover);
    }

  span {
    text-transform: lowercase;
  }
`;
