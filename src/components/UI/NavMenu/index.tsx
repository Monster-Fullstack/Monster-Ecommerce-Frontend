import React from "react";
import cl from "./index.module.scss";
import NavMenuItem from "./NavMenuItem";
import { AiFillHome, AiOutlineBell, AiOutlineHeart } from "react-icons/ai";
import { ListGroup } from "react-bootstrap";
import { FcAbout } from "react-icons/fc";
import { FaStoreAlt } from "react-icons/fa";
import OverLay from "../OverLay";
import { motion } from "framer-motion";
import { menuAni, menuAni2 } from "./NavAnimation";
import Categories from "../Categories";
import { Row, Col } from "react-bootstrap";
import Cart from "../Cart";
import { BiLogInCircle } from "react-icons/bi";
import NotificationsNo from "../NotificationsNo";
import { Link } from "react-router-dom";
import ShowSubCateogories from "./../../main/Category/ShowSubCategories/index";
import useGet from "./../../../hooks/useGet";
import Loader from "../../main/Loader";

const NavMenu: React.FC<{ toggleNav: () => void }> = ({ toggleNav }) => {
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
      <div className="mt-3 mb-2 d-flex align-items-center flex-column justify-content-center">
        <Link to="/cart">
          <Cart cart="mobile" />
        </Link>
        <Row className="w-75 mt-2">
          <Col>
            <Link to="/favourite">
              <AiOutlineHeart className={cl.icons} />
              <NotificationsNo many={10} />
            </Link>
          </Col>
          <Col>
            <Link to="/notification">
              <AiOutlineBell className={cl.icons} />
              <NotificationsNo many={4} />
            </Link>
          </Col>
        </Row>
      </div>
      <ListGroup>
        <NavMenuItem to="/">
          <AiFillHome /> Home
        </NavMenuItem>
        <NavMenuItem to="/login">
          <BiLogInCircle /> Login
        </NavMenuItem>
        <NavMenuItem to="/shop">
          <FaStoreAlt /> Shop
        </NavMenuItem>
        <NavMenuItem to="/about">
          <FcAbout /> About Us
        </NavMenuItem>
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
      <h3 className="text-center text-warning">Premium Subscriber</h3>
      <h5 className={`mt-3 mb-2 ${cl.appTitle}`}>Most Popular Subcategories</h5>
      {isDataReady ? allSubs : <Loader many={1} />}
    </motion.div>
  );
};

export default NavMenu;
