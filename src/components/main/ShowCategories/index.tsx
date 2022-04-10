import React from "react";
import { CategorySlider, GroupItemsSliderCategory } from "../../UI/Sliders";
import useResponsive from "./../../../hooks/useResponsive";

const ShowCategories: React.FC<{ categories: any }> = ({ categories }) => {
  const mode = useResponsive();
  return (
    <>
      {mode === "phone" || mode === "tablet" || mode === "desktop" ? (
        <CategorySlider items={categories} />
      ) : (
        <GroupItemsSliderCategory items={categories} />
      )}
    </>
  );
};

export default ShowCategories;
