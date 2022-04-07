import React from "react";
import ShowCategory from "../components/main/ShowCategory";
import PagesParent from "./PagesParent";
import RelatedCategories from "./../components/main/RelatedCategories/index";
import BestSellerProducts from "../components/main/BestSellerProducts";
import UnderXDollars from "../components/main/UnderXDollars";

const Category = () => {
  return (
    <PagesParent>
      <ShowCategory />
      <RelatedCategories />
      <BestSellerProducts />
      <UnderXDollars dollars={10} />
    </PagesParent>
  );
};

export default Category;
