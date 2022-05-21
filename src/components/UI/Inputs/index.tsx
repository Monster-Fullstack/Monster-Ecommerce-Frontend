import React, { useState } from "react";
import cl from "./index.module.scss";
import { motion } from "framer-motion";
import useGet from "../../../hooks/useGet";
import { ButtonSite } from "./../Buttons/index";
import { BiSearchAlt } from "react-icons/bi";
import Loader from "../../main/Loader";
import { Link, useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

export const inpAni = {
  hidden: {
    x: 35,
  },

  visible: {
    x: 0,
    transition: {
      delay: 1,
      duration: 0.7,
    },
  },
};

interface inputsModels {
  className?: string;
  settings: object;
}

export const InputSite = ({ className, onChange, settings }) => {
  return (
    <motion.input
      className={`form-control ${cl.inputSite} ${className}`}
      onChange={onChange}
      variants={inpAni}
      {...settings}
    />
  );
};

export const TextAreaSite: React.FC<inputsModels> = ({
  className,
  settings,
}) => {
  return (
    <motion.textarea
      className={`form-control ${cl.inputSite} ${className}`}
      variants={inpAni}
      {...settings}
    />
  );
};

export const SearchInput = ({ isGames = false }) => {
  let navigate = useNavigate();
  const searchApi = isGames ? "_games" : "";
  const [searchKey, setSearchKey] = useState();
  const searchHandler = (eo) => {
    setSearchKey(eo.currentTarget.value);
  };

  const searchGo = (eo) => {
    if (eo.keyCode === 13) {
      btnHandler();
    }
  };
  const { isDataReady, data: items } = useGet(
    `search${searchApi}/${searchKey}`
  );

  const itemHandler = () => {
    setSearchKey(null);
  };

  const allProducts =
    isDataReady && items.length > 0 ? (
      isGames ? (
        items.map((game) => (
          <div className={cl.papa}>
            <BsSearch className="me-3" />
            <Link onClick={itemHandler} to={`game/${game.id}`}>
              <span>{game.name}</span>
            </Link>
          </div>
        ))
      ) : (
        items.map((product) => (
          <div className={cl.papa}>
            <BsSearch className="me-3" />
            <Link onClick={itemHandler} to={`product/${product.id}`}>
              <span>{product.name}</span>
            </Link>
          </div>
        ))
      )
    ) : (
      <h5>Not Found Any Products!</h5>
    );

  const btnHandler = () => {
    setSearchKey(null);
    navigate(`/search${searchApi}/${searchKey}`);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      whileHover="hover"
      className={`input-group w-100 ${cl.searchParent}`}
    >
      <motion.input
        className={`form-control ${cl.inputSite}`}
        type="text"
        placeholder={`Search The ${isGames ? "Games" : "Products"}`}
        onChange={searchHandler}
        onKeyUp={searchGo}
        value={searchKey === null ? "" : searchKey}
        variants={inpAni}
      />
      <ButtonSite onClick={btnHandler} title="Search The Products">
        <BiSearchAlt />
      </ButtonSite>

      {searchKey ? (
        isDataReady ? (
          <div className={cl.autocom}>{allProducts}</div>
        ) : (
          <Loader type="search" />
        )
      ) : (
        ""
      )}
    </motion.div>
  );
};
