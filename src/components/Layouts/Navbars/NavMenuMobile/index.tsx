import React, { useState } from "react";
import ReactDOM from "react-dom";
import cl from "./index.module.scss";
import { Col, Row } from "react-bootstrap";
import MainContainer from "../../../UI/MainContainer";
import { Link } from "react-router-dom";
import Logo from "../../../../assets/images/Logo.png";
import Hamburger from "../../../UI/HamburgerMenu";
import TopNav from "../../../UI/TopSectionNav";
import NavMenu from "../../../UI/NavMenu";
import { AnimatePresence } from "framer-motion";

const NavTemplate: React.FC = () => {
  const [openNav, setOpenNav] = useState(false);
  const toggleNav = () => {
    setOpenNav(!openNav);
  };
  return (
    <TopNav>
      <MainContainer
        fluid={true}
        className={`fixed-top shadow-sm p-2 mb-0 bg-dark ${cl.grand}`}
      >
        <Row className="w-100">
          <Col className={`text-start ${cl.parent}`}>
            <Hamburger toggleNav={toggleNav} />
            <Link to="/">
              <img className={cl.logo} src={Logo} alt={"Store Logo"} />
            </Link>
          </Col>
        </Row>
      </MainContainer>
      <AnimatePresence>
        {openNav && <NavMenu toggleNav={toggleNav} />}
      </AnimatePresence>
    </TopNav>
  );
};

const NavMenuMobile: React.FC = () => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <NavTemplate />,
        document.getElementById("navbar")!
      )}
    </React.Fragment>
  );
};

export default NavMenuMobile;
