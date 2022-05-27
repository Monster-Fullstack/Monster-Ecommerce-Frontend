import React from "react";
import Loader from "../../Loader";
import cl from "./index.module.scss";
import PriceCard from "./../../../UI/AllCards/PriceCard/index";
import { ButtonBig } from "./../../../UI/Buttons/index";

const RightGame = ({ isDataReady, game }) => {
  const checkIfFree = isDataReady && game.price == 0;
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
            <div className={cl.btn_container}>
              <ButtonBig
                className="bg-success"
                secondText={checkIfFree ? `Download For Free` : "Buy Now"}
              >
                {checkIfFree ? "Get" : "Buy"}
              </ButtonBig>
            </div>
            <div className={cl.btn_container}>
              <ButtonBig secondText="Add To Cart">Add To Cart</ButtonBig>
            </div>
            <div className={cl.btn_container}>
              <ButtonBig secondText="Add To Favourite">Favourite</ButtonBig>
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
