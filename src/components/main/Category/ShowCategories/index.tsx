import React from "react";
import { CategorySlider, GroupItemsSliderCategory } from "../../../UI/Sliders";
import useResponsive from "../../../../hooks/useResponsive";
import ShowAllCategories from "./../ShowAllCategories/index";

const ShowCategories: React.FC<{
  categories: any;
  isDataReady?: boolean;
  showInslider?: boolean;
}> = ({ categories, showInslider = true, isDataReady = false }) => {
  const mode = useResponsive();
  return (
    <>
      {showInslider ? (
        mode === "phone" || mode === "tablet" || mode === "desktop" ? (
          <CategorySlider items={categories} />
        ) : (
          <GroupItemsSliderCategory items={categories} />
        )
      ) : (
        <ShowAllCategories isDataReady={isDataReady} cats={categories} />
      )}
    </>
  );
};

export default ShowCategories;
