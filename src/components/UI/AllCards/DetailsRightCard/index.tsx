import React, { useContext, useState } from "react";
import { Col } from "react-bootstrap";
import { AiFillDollarCircle, AiFillHeart } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";
import { ButtonSite } from "../../Buttons";
import { InputSite } from "../../Inputs";
import cl from "./index.module.scss";
import PriceCard from "../PriceCard";
import RemainCard from "../RemainCard";
import {
  ErrorToast,
  SuccessToast,
  WarningToast,
  WowToast,
} from "../../Toasts/ToastType";
import AppURL from "../../../../api/AppURL";
import axios from "axios";
import CartContext from "../../../../store/Cart";
import AuthContext from "../../../../store/Auth";
import { useNavigate } from "react-router-dom";
import FavouritesContext from "../../../../store/Favourites";

const DetailsRightCard: React.FC<{ AllProductData: any }> = ({
  AllProductData,
}) => {
  const product = AllProductData.product;
  const formChecks = product.colors.split(",");
  const [quantity, setQuantity] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const { changeCount } = useContext(CartContext);
  const { changeCount: changeCountFav } = useContext(FavouritesContext);
  const { loggedIn } = useContext(AuthContext);
  const nav = useNavigate();

  const quantityHandler = (eo: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(eo.target.value);
  };

  const colorHandler = (eo: React.ChangeEvent<HTMLInputElement>) => {
    setColor(eo.target.value);
  };

  const allFormChecks = formChecks.map((el) => (
    <div className="form-check me-4">
      <input
        className="form-check-input"
        type="radio"
        name="exampleRadios"
        id={`ex_${el}`}
        value={el}
        onChange={colorHandler}
      />
      <label className="form-check-label" htmlFor={`ex_${el}`}>
        {el}
      </label>
    </div>
  ));

  const addToCart = () => {
    if (loggedIn) {
      if (quantity.length > 0 && +quantity > 0 && color.length > 0) {
        axios
          .post(AppURL.AddToCart, {
            product_id: product.id,
            color: color,
            quantity: quantity,
            price: product.price,
          })
          .then((response: any) => {
            changeCount();
            SuccessToast(response.data.message);
          })
          .catch((error) => {
            ErrorToast(error.response.data.message);
          });
      } else {
        if (quantity.length <= 0) {
          ErrorToast("Please insert the quantity before adding to the cart");
        } else if (+quantity <= 0) {
          ErrorToast(
            "Please insert a valid quantity before adding to the cart"
          );
        } else {
          ErrorToast("Please choose the color before adding to the cart");
        }
      }
    } else {
      nav("/login");
      WarningToast("Please login first and try again");
    }
  };

  const addToFav = () => {
    axios
      .get(AppURL.CompileURL("products/favorites/add/" + product.id))
      .then((response) => {
        SuccessToast(response.data.message);
        changeCountFav();
      })
      .catch((error) => {
        WowToast(error.response.data.message);
      });
  };

  return (
    <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
      <>
        <h5 className={cl.ProductName}>{product.name}</h5>
        <h6 className="section-sub-title">
          Some Of Our Exclusive Collection, You May Like Some Of Our Exclusive
          Collection
        </h6>
        <h6 className="section-sub-title">
          Category: <p className="text-muted d-inline">{AllProductData.cat}</p>
        </h6>
        <h6 className="section-sub-title">
          Subcategory:{" "}
          <p className="text-muted d-inline">{AllProductData.sub}</p>
        </h6>
        <h6 className="section-sub-title">
          Sells: <p className="text-muted fs-5 d-inline">{product.sells}</p>
        </h6>
        <RemainCard sells={product.sells} quantity={product.quantity} />
        <PriceCard price={product.price} />
        <h6 className="mt-2">Choose Color</h6>
        <div className="input-group">{allFormChecks}</div>

        <h6 className="mt-2">Quantity</h6>
        <InputSite
          className="text-center w-50"
          onChange={quantityHandler}
          settings={{
            type: "number",
            max: "10",
            min: "1",
            default: "1",
          }}
        />

        <div className="input-group mt-3">
          <ButtonSite onClick={addToCart} className="m-1 ">
            <BsFillCartPlusFill className={cl.icon} /> Add To Cart
          </ButtonSite>
          <ButtonSite className="m-1">
            <AiFillDollarCircle className={cl.icon} /> Order Now
          </ButtonSite>
          <ButtonSite onClick={addToFav} className="m-1">
            <AiFillHeart className={cl.icon} /> Favourite
          </ButtonSite>
        </div>
      </>
    </Col>
  );
};

export default DetailsRightCard;
