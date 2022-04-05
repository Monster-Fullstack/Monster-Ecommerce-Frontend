import React from "react";
import PagesParent from "./PagesParent";
import ShowProductsSub from "./../components/main/ShowProductsSub/index";

const SubCategory: React.FC = () => {
  return (
    <PagesParent>
      <ShowProductsSub />
    </PagesParent>
  );
};

export default SubCategory;
