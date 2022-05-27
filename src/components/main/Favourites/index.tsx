import React, { useContext } from "react";
import MainContainer from "../../UI/MainContainer";
import { NormalTitle } from "../../UI/SectionTitle";
import useGet from "./../../../hooks/useGet";
import ShowProductsNoSliders from "./../Product/ShowProductsNoSliders/index";
import { Link } from "react-router-dom";
import axios from "axios";
import AppURL from "../../../api/AppURL";
import { ErrorToast, SuccessToast } from "../../UI/Toasts/ToastType";
import FavouritesContext from "../../../store/Favourites";

const Favourites = () => {
  const { isDataReady, data, setData } = useGet("products/favorites");
  const { changeCount } = useContext(FavouritesContext);

  // check if the favorites data isn't empty favourite
  const check = isDataReady && data.length > 0 ? true : false;

  const removeAll = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure you want to remove the favorite products")) {
      axios
        .get(AppURL.CompileURL("products/favorites/all"))
        .then((response) => {
          changeCount();
          setData([]);
          SuccessToast(response.data.message);
        })
        .catch((error) => {
          ErrorToast(error.response.data.message);
        });
    }
  };

  return (
    <MainContainer fluid={false}>
      <NormalTitle
        className="text-start"
        title="my favourite items"
        content=""
      />
      <p onClick={removeAll} className="fs-5 linkStyle">
        Remove All Favourite
      </p>
      {isDataReady && check ? (
        <ShowProductsNoSliders products={data} />
      ) : (
        <>
          <h3>You don't have any favourite products yet!</h3>
          <Link to="/">Search for more?</Link>
        </>
      )}
    </MainContainer>
  );
};

export default Favourites;
