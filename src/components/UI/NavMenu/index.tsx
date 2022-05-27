import React, { useContext } from "react";
import cl from "./index.module.scss";
import NavMenuItem from "./NavMenuItem";
import {
  AiFillHome,
  AiOutlineBell,
  AiOutlineHeart,
  AiOutlineHistory,
} from "react-icons/ai";
import { ListGroup } from "react-bootstrap";
import { FcAbout } from "react-icons/fc";
import OverLay from "../OverLay";
import { motion } from "framer-motion";
import { menuAni, menuAni2 } from "./NavAnimation";
import Categories from "../Categories";
import { Row, Col } from "react-bootstrap";
import Cart from "../Cart";
import { BiLogInCircle, BiLogOutCircle } from "react-icons/bi";
import NotificationsNo from "../NotificationsNo";
import { Link } from "react-router-dom";
import ShowSubCateogories from "./../../main/Category/ShowSubCategories/index";
import useGet from "./../../../hooks/useGet";
import Loader from "../../main/Loader";
import AuthContext from "../../../store/Auth";
import FavouritesContext from "../../../store/Favourites";
import { ButtonSite } from "../Buttons";

const NavMenu: React.FC<{ toggleNav: () => void; profileUrl?: string }> = ({
  toggleNav,
  profileUrl,
}) => {
  const { loggedIn, Logout } = useContext(AuthContext);
  const { count: countFav } = useContext(FavouritesContext);
  return (
    <motion.div
      className={cl.sideNavOpen}
      variants={menuAni}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <OverLay toggleLay={toggleNav} />
      <h3 className={cl.appTitle}>MonStore</h3>
      {loggedIn && (
        <div className="mt-3 mb-2 d-flex align-items-center flex-column justify-content-center">
          <img className={cl.avatar} src={profileUrl} />
          <Link to="/cart" className="mt-3">
            <Cart cart="mobile" />
          </Link>
          <Row className="w-75 mt-2">
            <Col>
              <Link to="/favourite">
                <AiOutlineHeart className={cl.icons} />
                <NotificationsNo many={countFav} />
              </Link>
            </Col>
            <Col>
              <Link to="/notification">
                <AiOutlineBell className={cl.icons} />
                <NotificationsNo many={4} />
              </Link>
            </Col>
            <Col>
              <Link to="orders">
                <AiOutlineHistory title="Orders History" className={cl.icons} />
              </Link>
            </Col>
          </Row>
        </div>
      )}
      <ListGroup>
        <NavMenuItem to="/">
          <AiFillHome /> Home
        </NavMenuItem>
        {!loggedIn ? (
          <>
            <NavMenuItem to="/login">
              <BiLogInCircle /> Login
            </NavMenuItem>
            <NavMenuItem to="/register">
              <BiLogInCircle /> Register
            </NavMenuItem>
          </>
        ) : (
          <NavMenuItem to="/profile">
            <BiLogInCircle /> Profile
          </NavMenuItem>
        )}
        <NavMenuItem to="/about">
          <FcAbout /> About Us
        </NavMenuItem>
        <br />
        {loggedIn && (
          <div className={cl.logout} onClick={Logout}>
            <BiLogOutCircle /> Logout
          </div>
        )}
      </ListGroup>
      <h3 className={`mt-3 mb-2 ${cl.appTitle}`}>Categories</h3>
      <Categories />
    </motion.div>
  );
};

export const NavMenu2: React.FC<{ toggleNav: () => void }> = ({
  toggleNav,
}) => {
  const { isDataReady, data: subs } = useGet("subcategories/mostviews");
  const allSubs =
    isDataReady &&
    subs.map((sub) => (
      <ShowSubCateogories
        SubName={sub.sub_cat.subcat_name}
        products={sub.products}
      />
    ));
  return (
    <motion.div
      className={cl.sideNavOpen2}
      variants={menuAni2}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <OverLay toggleLay={toggleNav} />
      <h5 className="text-center mt-2 fw-bolder fs-3">Most Popular</h5>
      {isDataReady ? (
        allSubs
      ) : (
        <>
          <Loader type="product_card_1" many={3} />
        </>
      )}
    </motion.div>
  );
};

export const NavMenu3: React.FC = () => (
  <div className={cl.thirdNav}>
    <Row className={cl.dad}>
      <Col>
        <Link className="text-white" to="/categories">
          <ButtonSite>All Categories</ButtonSite>
        </Link>
      </Col>
      <Col>
        <Link className="text-white" to="/subcategories">
          <ButtonSite>All Subcategories</ButtonSite>
        </Link>
      </Col>
      <Col>
        <Link className="text-white" to="/premium/products">
          <ButtonSite>
            <span className="text-warning">Premium</span> Products
          </ButtonSite>
        </Link>
      </Col>
    </Row>
  </div>
);

export default NavMenu;
