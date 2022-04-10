import React from "react";
import useResponsive from "./../../../hooks/useResponsive";
import { GroupItemsSlider, ItemsSlider } from "../../UI/Sliders";

const ShowProducts: React.FC<{ products: any }> = ({ products }) => {
  const mode = useResponsive();
  return (
    <>
      {mode === "phone" || mode === "tablet" || mode === "desktop" ? (
        <ItemsSlider items={products.products} />
      ) : (
        <GroupItemsSlider items={products.products} />
      )}
    </>
  );
};

export default ShowProducts;
