import React from "react";
import ReactDOM from "react-dom";
import cl from "./index.module.scss";
import { Col, Navbar, Row } from "react-bootstrap";
import Logo from "../../../../assets/images/Logo.png";
import { Link, NavLink } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import MainContainer from "../../../UI/MainContainer";
import { ButtonSite } from "../../../UI/Buttons";
import { InputSite } from "../../../UI/Inputs";
import { AiOutlineBell, AiOutlineHeart } from "react-icons/ai";
import Cart from "../../../UI/Cart";
import TopNav from "../../../UI/TopSectionNav";
import { motion } from "framer-motion";
import NotificationsNo from "../../../UI/NotificationsNo";

const NavMenuDeskTop: React.FC = () => {
  return (
    <TopNav>
      <Navbar bg="dark" fixed="top" className={cl.navbar}>
        <MainContainer
          fluid={true}
          className="fixed-top shadow-sm p-2 mb-0 bg-dark"
        >
          <Row className="w-100 justify-content-between">
            <Col lg={3} md={3} sm={12} xs={12} className="text-start">
              <Link to="/">
                <img className={cl.logo} src={Logo} alt={"Store Logo"} />
              </Link>
            </Col>
            <Col lg={3} md={3} sm={12} xs={12} className="p-1 mt-1">
              <motion.div
                initial="hidden"
                animate="visible"
                whileHover="hover"
                className="input-group w-100"
              >
                <InputSite
                  settings={{
                    type: "text",
                    placeholder: "Search The Products",
                  }}
                />
                <ButtonSite title="Search The Products">
                  <BiSearchAlt />
                </ButtonSite>
              </motion.div>
            </Col>
            <Col lg={6} md={6} sm={12} xs={12} className="p-1 mt-1 text-center">
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
              <NavLink to="/login" className="h4 btn text-white none">
                Login
              </NavLink>
              <Cart />
            </Col>
          </Row>
        </MainContainer>
      </Navbar>
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
