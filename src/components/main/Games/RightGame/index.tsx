import React, { useContext } from "react";
import Loader from "../../Loader";
import cl from "./index.module.scss";
import PriceCard from "./../../../UI/AllCards/PriceCard/index";
import { ButtonBig } from "./../../../UI/Buttons/index";
import CartContext from "../../../../store/Cart";
import AuthContext from "../../../../store/Auth";
import FavouritesContext from "../../../../store/Favourites";
import {
  ErrorToast,
  SuccessToast,
  WarningToast,
  WowToast,
} from "../../../UI/Toasts/ToastType";
import AppURL from "../../../../api/AppURL";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RightGame = ({ isDataReady, game }) => {
  const checkIfFree = isDataReady && game.price == 0;
  const { changeCount } = useContext(CartContext);
  const { changeCount: changeCountFav } = useContext(FavouritesContext);
  const { loggedIn } = useContext(AuthContext);
  const nav = useNavigate();

  const addToCart = () => {
    if (loggedIn) {
      axios
        .post(AppURL.AddGameToCart, {
          game_id: game.id,
          price: game.price,
        })
        .then((response: any) => {
          changeCount();
          SuccessToast(response.data.message);
        })
        .catch((error) => {
          ErrorToast(error.response.data.message);
        });
    } else {
      nav("/login");
      WarningToast("Please login first and try again");
    }
  };

  return (
    <>
      {isDataReady ? (
        <>
          <img
            className={cl.photo}
            alt={game.name}
            src={game.main_image.name}
          />
          <PriceCard price={game.price} />
          <p className="text-start">{game.description}</p>
          <div>
            <div onClick={addToCart} className={cl.btn_container}>
              <ButtonBig secondText="Add To Cart">Add To Cart</ButtonBig>
            </div>
          </div>
        </>
      ) : (
        <Loader type="box" />
      )}
    </>
  );
};

export default RightGame;
