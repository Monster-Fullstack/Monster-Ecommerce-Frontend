import React from "react";
import PagesParent from "./Container/PagesParent";
import ShowProductsSub from "./../components/main/Product/ShowProductsSub/index";
import UnderXDollars from "../components/main/Product/UnderXDollars";
import NewArrival from "../components/main/Product/NewArrival";
import FeaturedProducts from "../components/main/Product/FeaturedProducts";

const SubCategory: React.FC = () => {
  return (
    <PagesParent>
      <ShowProductsSub />
      <UnderXDollars dollars={99.99} type="desc" />
      <UnderXDollars dollars={999.99} type="desc" />
      <NewArrival />
      <FeaturedProducts />
    </PagesParent>
  );
};

export default SubCategory;
