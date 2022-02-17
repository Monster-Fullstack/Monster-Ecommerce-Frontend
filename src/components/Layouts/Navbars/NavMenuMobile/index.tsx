import React from "react";
import cl from "./index.module.scss";
import {Row} from "react-bootstrap";
import MainContainer from "../../../UI/MainContainer";
import NavCol from "../../../UI/NavCol";
import {Link} from "react-router-dom";
import Logo from "../../../../assets/images/Logo.png";
import Cart from "../../../UI/Cart";

const NavMenuMobile: React.FC = () => {
    return (
        <div className={cl.topSectionDown}>
            <MainContainer className="fixed-top shadow-sm p-2 mb-0 bg-dark">
                <Row className="w-100">
                    <NavCol className="text-start">
                        <Link to="/">
                            <img className={cl.logo} src={Logo} alt={"Store Logo"}/>
                        </Link>
                        <Cart/>
                    </NavCol>
                </Row>
            </MainContainer>
        </div>
    );
};

export default NavMenuMobile;