import React from "react";
import styled from "styled-components";
import { QUERIES } from "../../constants";
import { Wrapper as ModalWrapper } from "../Modal";
import { Wrapper as HeroWrapper } from "../Hero";

function Button({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

const Wrapper = styled.button`
  background-color: var(--bg-black);
  width: 147px;
  height: 64px;
  color: var(--white);
  font-weight: var(--extra-bold);
  font-size: var(--16px);
  line-height: 20px;
  border: none;
  padding: 0;
  cursor: pointer;
  text-transform: capitalize;

  span {
    text-transform: lowercase;
  }

  &:hover {
    background-color: var(--black-hover);
  }

  @media ${QUERIES.laptopAndUp} {
    width: 199px;
  }

  ${ModalWrapper} & , ${HeroWrapper} & {
    width: 199px;
    height: 64px;
    background: var(--red);
    font-size: var(--16px);
    font-weight: var(--extra-bold);

    &:hover {
      background-color: var(--red-hover);
    }
  }

  ${HeroWrapper} & {
    margin-top: 25px;
    font-size: var(--18px);
    width: 177px;
    height: 72px;

    @media ${QUERIES.laptopAndUp} {
      margin-top: 10px;
    }
  }
`;

export default Button;
