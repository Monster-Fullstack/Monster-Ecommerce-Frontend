import React from "react";
import useGet from "../../../hooks/useGet";
import Menu from "../MegaMenu/Menu";
import Loader from "./../../main/Loader/index";

const Categories: React.FC = () => {
  const { isDataReady, data } = useGet("category");

  const allCategories = isDataReady ? (
    data.map((el) => <Menu name={el.main_cat.cat_name} items={el.subs_names} />)
  ) : (
    <Loader many={2} />
  );

  return <div>{isDataReady ? allCategories : <Loader many={2} />}</div>;
};

export default Categories;
