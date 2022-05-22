import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import cl from "./index.module.scss";
import { Col, Navbar, Row } from "react-bootstrap";
import Logo from "../../../../assets/images/Logo.png";
import { Link, NavLink } from "react-router-dom";
import MainContainer from "../../../UI/MainContainer";
import { ButtonSite } from "../../../UI/Buttons";
import { AiOutlineBell, AiOutlineHeart } from "react-icons/ai";
import Cart from "../../../UI/Cart";
import TopNav from "../../../UI/TopSectionNav";
import NotificationsNo from "../../../UI/NotificationsNo";
import Hamburger from "./../../../UI/HamburgerMenu/index";
import NavMenu, { NavMenu2 } from "./../../../UI/NavMenu/index";
import { AnimatePresence } from "framer-motion";
import { IoLogoGameControllerB } from "react-icons/io";
import { SearchInput } from "./../../../UI/Inputs/index";
import AuthContext from "../../../../store/Auth";
import { motion } from "framer-motion";
import { dropdownAvatarAni } from "../../../UI/NavMenu/NavAnimation";

const NavMenuDeskTop: React.FC = () => {
  const [openNav, setOpenNav] = useState(false);
  const { loggedIn, user, Logout } = useContext(AuthContext);
  const [showDrop, setShowDrop] = useState(false);
  const toggleNav = () => {
    setOpenNav(!openNav);
  };
  const [openNav2, setOpenNav2] = useState(false);
  const toggleNav2 = () => {
    setOpenNav2(!openNav2);
  };

  const hidePhotoDrop = () => {
    setShowDrop(false);
  };
  return (
    <TopNav className="w-100">
      <Navbar bg="dark" fixed="top" className={cl.navbar}>
        <MainContainer
          fluid={true}
          className="fixed-top shadow-sm p-2 mb-0 bg-dark"
        >
          <Row className="w-100 justify-content-around pt-2">
            <Col
              lg={3}
              md={4}
              sm={12}
              xs={12}
              className="justify-content-between"
              style={{ maxHeight: "60px" }}
            >
              <TopNav>
                <Row>
                  <Col xs={2} className={`text-start ${cl.parent}`}>
                    <Hamburger toggleNav={toggleNav} />
                  </Col>
                  <Col xs={10}>
                    <Link to="/">
                      <img className={cl.logo} src={Logo} alt={"Store Logo"} />
                    </Link>
                  </Col>
                </Row>
                <AnimatePresence>
                  {openNav && <NavMenu toggleNav={toggleNav} />}
                </AnimatePresence>
              </TopNav>
            </Col>
            <Col lg={4} md={3} sm={12} xs={12} className="p-1 mt-1">
              <SearchInput />
            </Col>
            <Col lg={4} md={5} sm={12} xs={12} className="p-1 mt-1 text-center">
              <Link to="/favourite">
                <AiOutlineHeart className={`h4 ${cl.icon}`} />
                <NotificationsNo many={10} />
              </Link>
              <Link to="/notification" className="btn none">
                <AiOutlineBell
                  title="You have 5 notifications"
                  className={`h4 ${cl.icon}`}
                />
                <NotificationsNo many={4} />
              </Link>
              {loggedIn ? (
                ""
              ) : (
                <>
                  <NavLink to="/login" className="h4 btn text-white none">
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="ms-2 h4 btn text-white none"
                  >
                    Register
                  </NavLink>
                </>
              )}
              {loggedIn ? (
                <Link to="/cart">
                  <Cart />
                </Link>
              ) : (
                ""
              )}
            </Col>
          </Row>
        </MainContainer>
      </Navbar>
      <div className={cl.secNav}>
        {/* Second Navbar */}
        <TopNav className="w-100 h-100">
          <Row className="align-items-center justify-content-end">
            <Col className="me-auto" md={2}>
              {loggedIn && (
                <div
                  onMouseEnter={() => {
                    setShowDrop(true);
                  }}
                  onMouseLeave={hidePhotoDrop}
                  className={cl.avatarDad}
                >
                  <img
                    src={user?.profile_photo_url}
                    alt="Your Avatar"
                    className={cl.avatar}
                  />

                  {showDrop && (
                    <motion.div
                      variants={dropdownAvatarAni}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className={cl.dropdownPapa}
                    >
                      <div className={cl.dropdownAvatar}>
                        <ul>
                          <li>
                            <Link
                              onClick={hidePhotoDrop}
                              className="normalText"
                              to="/profile"
                            >
                              Profile
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={hidePhotoDrop}
                              className="normalText"
                              to="/favourite"
                            >
                              Favorites
                            </Link>
                          </li>
                          <li onClick={Logout}>logout</li>
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </div>
              )}
            </Col>
            <Col md={5}>
              <SearchInput isGames={true} />
            </Col>
            <Col md={2}></Col>
            <Col md={1}>
              <Link to="/gamer">
                <IoLogoGameControllerB
                  title="Are you a gamer?"
                  className={cl.gamesIcon}
                />
              </Link>
            </Col>
            <Col md={1}>
              <Hamburger toggleNav={toggleNav2} />
            </Col>
          </Row>
          <AnimatePresence>
            {openNav2 && <NavMenu2 toggleNav={toggleNav2} />}
          </AnimatePresence>
        </TopNav>
      </div>
      <div className={cl.thirdNav}>
        <Row className="justify-content-around w-50 align-items-center">
          <Col sm={4}>
            <Link className="text-white" to="/categories">
              <ButtonSite>All Categories</ButtonSite>
            </Link>
          </Col>
          <Col sm={4}>
            <Link className="text-white" to="/subcategories">
              <ButtonSite>All Subcategories</ButtonSite>
            </Link>
          </Col>
          <Col sm={4}>
            <Link className="text-white" to="/premium/products">
              <ButtonSite>
                <span className="text-warning">Premium</span> Products
              </ButtonSite>
            </Link>
          </Col>
        </Row>
      </div>
    </TopNav>
  );
};

const NavMenuDesk: React.FC = () => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <NavMenuDeskTop />,
        document.getElementById("navbar")!
      )}
    </React.Fragment>
  );
};

export default NavMenuDesk;
