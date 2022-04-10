import React from "react";
import PagesParent from "./../PagesParent";
import ShowInPagination from "./../../components/UI/ShowInPagination/index";
import ShowProductsNoSliders from "./../../components/main/Product/ShowProductsNoSliders/index";

const PremiumProducts = () => {
  return (
    <PagesParent>
      <ShowInPagination
        countApi="products/premium/count"
        itemsInJSX={(products) => <ShowProductsNoSliders products={products} />}
        apiLink="products/premium"
      />
    </PagesParent>
  );
};

export default PremiumProducts;
