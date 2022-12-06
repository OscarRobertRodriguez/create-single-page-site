import React from "react";
import styled from "styled-components";
import LogoImg from "../../assets/desktop/logo.svg";
import HamburgerIcon from "../../assets/mobile/icon-hamburger.svg";
import Button from "../Button/Button";
import CrossIcon from "../../assets/mobile/icon-cross.svg";
import { QUERIES } from "../../constants";

function Header({ width, open, setOpen }) {
  return (
    <Wrapper className="full-bleed">
      <Logo src={LogoImg} alt="company logo - home" />
      {width < 768 ? (
        open ? (
          <Cross
            src={CrossIcon}
            alt="close nav"
            onClick={() => setOpen((prev) => !prev)}
          />
        ) : (
          <Hamburger
            src={HamburgerIcon}
            alt="Mobile Menu - click for site nav"
            onClick={() => setOpen((prev) => !prev)}
          />
        )
      ) : (
        <TabletAndUpNavWrapper>
          <Nav>
            <a href="0" title="About">
              About
            </a>
            <a href="0" title="Service">
              Service
            </a>
            <a href="0" title="Projects">
              Projects
            </a>
            <Button>
              schedule <span>a</span> call
            </Button>
          </Nav>
        </TabletAndUpNavWrapper>
      )}
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.header`
  height: 120px;
  background: var(--white);
  top: 0;
  justify-items: space-between;
  max-width: 1440px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  z-index: 99999;
  width: 100%;

  @media ${QUERIES.tabletAndUp} {
    height: 178px;
    grid-template-columns: 0.43fr 0.57fr;
  }

  @media ${QUERIES.desktopAndUp} {
    grid-template-columns: 1fr 0.97fr;
  }
`;

const Hamburger = styled.img`
  justify-self: end;
  cursor: pointer;
`;

const Cross = styled(Hamburger)``;

const Logo = styled.img`
  @media ${QUERIES.tabletAndUp} {
    padding-left: var(--indoor-breathing-room);
  }
`;

const TabletAndUpNavWrapper = styled.div`
  background: var(--red);
  align-self: initial;
  grid-column: 2/-1;
  height: 100%;
  display: flex;
  padding-right: var(--indoor-breathing-room);
`;

const Nav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-left: 33px;
  align-items: center;
  max-width: 600px;

  @media ${QUERIES.laptopAndUp} {
    padding-left: 40px;
  }

  a {
    text-decoration: none;
    font-size: var(--15px);
    color: var(--white);
    transition: 0.2s all;
    padding: 4px;
    transition: 0.2ms all;

    @media ${QUERIES.laptopAndUp} {
      font-size: var(--16px);
    }

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
  }
`;
