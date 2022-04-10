import React from "react";
import ShowCategory from "../components/main/Category/ShowCategory";
import PagesParent from "./PagesParent";
import RelatedCategories from "./../components/main/Category/RelatedCategories/index";
import BestSellerProducts from "../components/main/Product/BestSellerProducts";
import UnderXDollars from "../components/main/Product/UnderXDollars";

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
