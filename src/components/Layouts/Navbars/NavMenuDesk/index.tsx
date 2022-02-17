import React from "react";
import cl from "./index.module.scss";
import {Navbar, Row} from "react-bootstrap";
import NavCol from "../../../UI/NavCol";
import Logo from "../../../../assets/images/Logo.png";
import {Link, NavLink} from "react-router-dom";
import {BiSearchAlt} from "react-icons/bi";
import MainContainer from "../../../UI/MainContainer";
import {ButtonSite} from "../../../UI/Buttons";
import {InputSite} from "../../../UI/Inputs";
import {AiOutlineBell} from "react-icons/ai";
import {GoDeviceMobile} from "react-icons/go";
import Cart from "../../../UI/Cart";

const NavMenuDesk: React.FC = () => {
    return (
        <div className={cl.topSectionDown}>
            <Navbar bg="dark" fixed="top" className={cl.navbar}>
                <MainContainer className="fixed-top shadow-sm p-2 mb-0 bg-dark">
                    <Row className="w-100">
                        <NavCol className="text-start">
                            <Link to="/">
                                <img className={cl.logo} src={Logo} alt={"Store Logo"}/>
                            </Link>
                        </NavCol>
                        <NavCol className="p-1 mt-1">
                            <div className="input-group w-100 move">
                                <InputSite settings={{
                                    type: "text",
                                    placeholder: "Search The Products"
                                }}/>
                                <ButtonSite title="Search The Products">
                                    <BiSearchAlt/>
                                </ButtonSite>
                            </div>
                        </NavCol>
                        <NavCol className="p-1 mt-1 text-start">
                            <NavLink to="/" className="btn none">
                                <AiOutlineBell title="You have 5 notifications" className={`h4 ${cl.icon}`}/>
                                <sup><span className="bg-danger badge text-white">
                                    5
                                </span></sup>
                            </NavLink>
                            <a className="btn none">
                                <GoDeviceMobile title="Mobile Mode" className={`h4 ${cl.icon}`}/>
                            </a>
                            <NavLink to="/" className="h4 btn text-white none">
                                Login
                            </NavLink>
                            <Cart/>
                        </NavCol>
                    </Row>
                </MainContainer>
            </Navbar>
        </div>
    );
};

export default NavMenuDesk;