import React from "react";
import ShowCategory from "../components/main/Category/ShowCategory";
import PagesParent from "./Container/PagesParent";
import RelatedCategories from "./../components/main/Category/RelatedCategories/index";
import BestSellerProducts from "../components/main/Product/BestSellerProducts";
import UnderXDollars from "../components/main/Product/UnderXDollars";

const Category: React.FC<{ mode?: "normal" | "gaming"; setGameMode: any }> = ({
  mode = "normal",
  setGameMode,
}) => {
  mode === "gaming" && setGameMode(true);
  return (
    <PagesParent mode={mode === "gaming" ? "gaming" : "normal"}>
      <ShowCategory />
      <RelatedCategories />
      <BestSellerProducts />
      <UnderXDollars dollars={10} />
    </PagesParent>
  );
};

export default Category;
