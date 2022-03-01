import React from "react";
import ReactDOM from "react-dom";
import cl from "./index.module.scss";
import { Navbar, Row } from "react-bootstrap";
import NavCol from "../../../UI/NavCol";
import Logo from "../../../../assets/images/Logo.png";
import { Link, NavLink } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import MainContainer from "../../../UI/MainContainer";
import { ButtonSite } from "../../../UI/Buttons";
import { InputSite } from "../../../UI/Inputs";
import { AiOutlineBell } from "react-icons/ai";
import Cart from "../../../UI/Cart";
import TopNav from "../../../UI/TopSectionNav";
import { motion } from "framer-motion";

const NavMenuDeskTop: React.FC = () => {
  return (
    <TopNav>
      <Navbar bg="dark" fixed="top" className={cl.navbar}>
        <MainContainer
          fluid={true}
          className="fixed-top shadow-sm p-2 mb-0 bg-dark"
        >
          <Row className="w-100">
            <NavCol className="text-start">
              <Link to="/">
                <img className={cl.logo} src={Logo} alt={"Store Logo"} />
              </Link>
            </NavCol>
            <NavCol className="p-1 mt-1">
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
            </NavCol>
            <NavCol className="p-1 mt-1 text-start">
              <Link to="/" className="btn none">
                <AiOutlineBell
                  title="You have 5 notifications"
                  className={`h4 ${cl.icon}`}
                />
                <sup>
                  <span className="bg-danger badge text-white">5</span>
                </sup>
              </Link>
              <NavLink to="/login" className="h4 btn text-white none">
                Login
              </NavLink>
              <Cart />
            </NavCol>
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
