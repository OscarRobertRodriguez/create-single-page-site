import React from "react";
import styled from "styled-components";
import { QUERIES } from "../../constants";
import Modal, { Wrapper as ModalWrapper } from "../Modal";

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

  ${ModalWrapper} & {
    width: 199px;
    height: 64px;
    background: var(--red);
    font-size: var(--16px);
    font-weight: var(--extra-bold);

    &:hover {
      background-color: var(--red-hover);
    }
  }
`;

export default Button;
