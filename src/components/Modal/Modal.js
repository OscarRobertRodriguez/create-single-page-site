import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";

function Modal({ open }) {
  return (
    <Wrapper open={open}>
      <Nav>
        <NavLink href="0" title="About">
          About
        </NavLink>
        <NavLink href="0" titile="Service">
          Service
        </NavLink>
        <NavLink href="0" title="Projects">
          Projects
        </NavLink>
        <Button>Schedule <span>a</span> Call</Button>
      </Nav>
    </Wrapper>
  );
}

export default Modal;

export const Wrapper = styled.div`
  width: 252px;
  height: 292px;
  background: var(--bg-black);
  color: var(--white);
  position: fixed;
  top: 0px;
  right: 26px;
  transform: ${(props) => (props.open ? `translateY(41%)` : `translateY(-100%)`)};
  transition: 0.2s all;
  isolation: isolate;
  z-index: 9999;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  padding-top: 32px;
  padding-bottom: 32px;
  gap: 24px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: var(--white);
  font-size: var(--18px);
  transition: ease-in-out 0.2s all;

  &:hover {
    font-weight: var(--bold);
  }

  &:before {
    display: block;
    content: attr(title);
    font-weight: bold;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }
`;
