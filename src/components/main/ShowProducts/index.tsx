import React from "react";
import useResponsive from "./../../../hooks/useResponsive";
import { GroupItemsSlider, ItemsSlider } from "../../UI/Sliders";

const ShowProducts = (products: any) => {
  const mode = useResponsive();
  console.log(products);
  return (
    <>
      {mode === "phone" || mode === "tablet" ? (
        <ItemsSlider items={products.products} />
      ) : (
        <GroupItemsSlider items={products.products} />
      )}
    </>
  );
};

export default ShowProducts;
