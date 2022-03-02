import React from "react";
import NewArrival from "../components/main/NewArrival";
import ProductDetails from "../components/main/ProductDetails";
import RelatedProducts from "../components/main/RelatedProducts";
import PagesParent from "./PagesParent";

const Product: React.FC = () => {
  return (
    <PagesParent>
      <ProductDetails />
      <RelatedProducts />
      <NewArrival groupSlider={true} />
    </PagesParent>
  );
};

export default Product;
