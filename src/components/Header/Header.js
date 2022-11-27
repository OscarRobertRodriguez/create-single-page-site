import React from "react";
import styled from "styled-components";
import LogoImg from "../../assets/desktop/logo.svg";
import HamburgerIcon from "../../assets/mobile/icon-hamburger.svg";
import Button from "../Button/Button";
import CrossIcon from "../../assets/mobile/icon-cross.svg";
import { QUERIES } from "../../constants";

function Header({ width, open, setOpen }) {
  return (
    <Wrapper>
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
  position: fixed;
  margin: 0 -24px;
  width: 100%;
  height: 120px;
  background: var(--white);
  top: 0;
  justify-items: space-between;
  padding : 0 24px;
  max-width: 1440px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  z-index: 99999;

  @media ${QUERIES.tabletAndUp} {
    position: absolute;
    height: 178px;
    grid-template-columns: 0.7fr 1fr;
    padding: 0;
    margin: 0;
  }

  @media ${QUERIES.desktopAndUp} {
    grid-template-columns: 1fr .97fr;
  }
`;

const Hamburger = styled.img`
  justify-self: end;
  /* padding-right: 24px; */
  cursor: pointer;
`;

const Cross = styled(Hamburger)``;

const Logo = styled.img`
  /* padding-left: 24px; */

  @media ${QUERIES.tabletAndUp} {
    padding-left: 40px;
  }  
  @media ${QUERIES.laptopAndUp} {
   padding-left: 165px;
}



  @media ${QUERIES.desktopAndUp} {
    /* padding-left: 165px; */
  }
`;

const TabletAndUpNavWrapper = styled.div`
  background: var(--red);

  align-self: initial;
  grid-column: 2/-1;
  height: 100%;
  padding-right: 165px;
  display: flex;

  padding-right: 24px;

  @media ${QUERIES.tabletAndUp} {
    padding-right: 40px;
  }
  @media ${QUERIES.desktopAndUp} {
    padding-right: 165px;
  }
`;

const Nav = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding-left: 33px;
  align-items: center;
  max-width: 600px;

  @media ${QUERIES.laptopAndUp} {
    padding-left: 70px;
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
