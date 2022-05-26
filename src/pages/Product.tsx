import React from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/main/Loader";
import NewArrival from "../components/main/Product/NewArrival";
import ProductDetails from "../components/main/Product/ProductDetails";
import RelatedProducts from "../components/main/Product/RelatedProducts";
import useGet from "../hooks/useGet";
import PagesParent from "./PagesParent";

const Product: React.FC = () => {
  const { id } = useParams();
  const { isDataReady, data: AllProductData } = useGet(`product/${id}`);

  return (
    <PagesParent>
      <ProductDetails
        isDataReady={isDataReady}
        AllProductData={AllProductData}
      />
      <NewArrival groupSlider={true} />
      {isDataReady ? (
        <RelatedProducts subcatid={AllProductData.product.sub_cat_id} />
      ) : (
        <Loader type="items" />
      )}
    </PagesParent>
  );
};

export default Product;
