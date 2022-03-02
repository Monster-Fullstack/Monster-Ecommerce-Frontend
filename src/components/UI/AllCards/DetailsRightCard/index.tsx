import React from "react";
import { Col } from "react-bootstrap";
import { AiFillDollarCircle, AiFillHeart } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";
import { ButtonSite } from "../../Buttons";
import { InputSite } from "../../Inputs";
import cl from "./index.module.scss";

const DetailsRightCard: React.FC<{ name: string; price: number }> = ({
  name,
  price,
}) => {
  return (
    <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
      <h5 className={cl.ProductName}>{name}</h5>
      <h6 className="section-sub-title">
        Some Of Our Exclusive Collection, You May Like Some Of Our Exclusive
        Collectio
      </h6>
      <div className="input-group">
        <div className={`${cl.ProductPriceCard} d-inline`}>Price: {price}</div>
      </div>
      <h6 className="mt-2">Choose Color</h6>
      <div className="input-group">
        <div className="form-check mx-1">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="option1"
          />
          <label className="form-check-label" htmlFor="exampleRadios1">
            Black
          </label>
        </div>
        <div className="form-check mx-1">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="option1"
          />
          <label className="form-check-label" htmlFor="exampleRadios1">
            Green
          </label>
        </div>
        <div className="form-check mx-1">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="option1"
          />
          <label className="form-check-label" htmlFor="exampleRadios1">
            Red
          </label>
        </div>
      </div>

      <h6 className="mt-2">Choose Size</h6>
      <div className="input-group">
        <div className="form-check mx-1">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="option1"
          />
          <label className="form-check-label" htmlFor="exampleRadios1">
            X
          </label>
        </div>
        <div className="form-check mx-1">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="option1"
          />
          <label className="form-check-label" htmlFor="exampleRadios1">
            XX
          </label>
        </div>
        <div className="form-check mx-1">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="option1"
          />
          <label className="form-check-label" htmlFor="exampleRadios1">
            XXXX
          </label>
        </div>
      </div>

      <h6 className="mt-2">Quantity</h6>
      <InputSite
        className="text-center w-50"
        settings={{
          type: "number",
          max: "10",
          min: "1",
        }}
      />

      <div className="input-group mt-3">
        <ButtonSite className="m-1 ">
          <BsFillCartPlusFill className={cl.icon} /> Add To Cart
        </ButtonSite>
        <ButtonSite className="m-1">
          <AiFillDollarCircle className={cl.icon} /> Order Now
        </ButtonSite>
        <ButtonSite className="m-1">
          <AiFillHeart className={cl.icon} /> Favourite
        </ButtonSite>
      </div>
    </Col>
  );
};

export default DetailsRightCard;
