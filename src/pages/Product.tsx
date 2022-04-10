import React from "react";
import BestFor from "../components/main/Product/BestFor";
import NewArrival from "../components/main/Product/NewArrival";
import ProductDetails from "../components/main/Product/ProductDetails";
import RelatedProducts from "../components/main/Product/RelatedProducts";
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
