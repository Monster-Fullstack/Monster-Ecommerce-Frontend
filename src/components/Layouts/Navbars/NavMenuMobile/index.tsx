import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import cl from "./index.module.scss";
import { Col, Row } from "react-bootstrap";
import MainContainer from "../../../UI/MainContainer";
import { Link } from "react-router-dom";
import Logo from "../../../../assets/images/Logo.png";
import Hamburger from "../../../UI/HamburgerMenu";
import TopNav from "../../../UI/TopSectionNav";
import NavMenu, { NavMenu3 } from "../../../UI/NavMenu";
import { AnimatePresence } from "framer-motion";
import { ButtonSite } from "../../../UI/Buttons";
import profileImagePath from "./../../../../Functions/profileImagePath";
import AuthContext from "../../../../store/Auth";

const NavTemplate: React.FC = () => {
  const [openNav, setOpenNav] = useState(false);
  const { user, loggedIn } = useContext(AuthContext);
  const profilePhoto =
    loggedIn &&
    user?.profile_photo_url &&
    profileImagePath(user.profile_photo_url);
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
        {openNav && <NavMenu profileUrl={profilePhoto} toggleNav={toggleNav} />}
      </AnimatePresence>
      {/* the third nav [ in the bottom ] */}
      <NavMenu3 />
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
