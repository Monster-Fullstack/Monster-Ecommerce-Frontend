import React from "react";
import BestFor from "../components/main/BestFor";
import NewArrival from "../components/main/NewArrival";
import ProductDetails from "../components/main/ProductDetails";
import RelatedProducts from "../components/main/RelatedProducts";
import PagesParent from "./PagesParent";

const Product: React.FC = () => {
  return (
    <PagesParent>
      <ProductDetails />
      <NewArrival groupSlider={true} />
      <BestFor type="Gaming" />
      <RelatedProducts />
    </PagesParent>
  );
};

export default Product;
