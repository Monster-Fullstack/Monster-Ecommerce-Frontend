import React from "react";
import useGet from "../../../hooks/useGet";
import Menu from "../MegaMenu/Menu";

const Categories: React.FC = () => {
  const { isDataReady, data } = useGet("category");

  console.log(data);
  const allCategories =
    isDataReady &&
    data.map((el) => (
      <Menu name={el.cat_name.cat_name} items={el.subs_names} />
    ));

  return <div>{isDataReady && allCategories}</div>;
};

export default Categories;
