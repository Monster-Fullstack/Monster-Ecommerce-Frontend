import React from "react";
import PagesParent from "./PagesParent";
import ShowProductsSub from "./../components/main/ShowProductsSub/index";
import UnderXDollars from "../components/main/UnderXDollars";
import NewArrival from "../components/main/NewArrival";
import FeaturedProducts from "../components/main/FeaturedProducts";
import BestFor from "../components/main/BestFor";

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
