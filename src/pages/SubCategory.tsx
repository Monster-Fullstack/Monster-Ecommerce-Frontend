import React from "react";
import PagesParent from "./PagesParent";
import ShowProductsSub from "./../components/main/Product/ShowProductsSub/index";
import UnderXDollars from "../components/main/Product/UnderXDollars";
import NewArrival from "../components/main/Product/NewArrival";
import FeaturedProducts from "../components/main/Product/FeaturedProducts";
import BestFor from "../components/main/Product/BestFor";

const SubCategory: React.FC = () => {
  return (
    <PagesParent>
      <ShowProductsSub />
      <UnderXDollars dollars={99.99} type="desc" />
      <UnderXDollars dollars={999.99} type="desc" />
      <NewArrival />
      <BestFor type="Gaming" />
      <FeaturedProducts />
    </PagesParent>
  );
};

export default SubCategory;
