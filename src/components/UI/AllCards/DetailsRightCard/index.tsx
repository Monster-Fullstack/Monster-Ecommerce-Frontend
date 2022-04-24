import React from "react";
import { Col } from "react-bootstrap";
import { AiFillDollarCircle, AiFillHeart } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";
import { ButtonSite } from "../../Buttons";
import { InputSite } from "../../Inputs";
import cl from "./index.module.scss";
import PriceCard from "../PriceCard";
import RemainCard from "../RemainCard";

const DetailsRightCard: React.FC<{ AllProductData: any }> = ({
  AllProductData,
}) => {
  const product = AllProductData.product;
  const formChecks = product.avilable_colors.split(",");

  const allFormChecks = formChecks.map((el) => (
    <div className="form-check me-4">
      <input
        className="form-check-input"
        type="radio"
        name="exampleRadios"
        id={`ex_${el}`}
        value={el}
      />
      <label className="form-check-label" htmlFor={`ex_${el}`}>
        {el}
      </label>
    </div>
  ));

  const color_remain =
    product.avilable_quantity - product.sells < 10 ? "danger" : "success";

  return (
    <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
      <>
        <h5 className={cl.ProductName}>{product.name}</h5>
        <h6 className="section-sub-title">
          Some Of Our Exclusive Collection, You May Like Some Of Our Exclusive
          Collectio
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
        <RemainCard
          sells={product.sells}
          quantity={product.avilable_quantity}
        />
        <PriceCard price={product.price} />
        <h6 className="mt-2">Choose Color</h6>
        <div className="input-group">{allFormChecks}</div>

        <h6 className="mt-2">Quantity</h6>
        <InputSite
          className="text-center w-50"
          settings={{
            type: "number",
            max: "10",
            min: "1",
            default: "1",
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
      </>
    </Col>
  );
};

export default DetailsRightCard;
