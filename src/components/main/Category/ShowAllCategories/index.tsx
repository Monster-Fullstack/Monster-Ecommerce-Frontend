import React from "react";
import CategoryCard from "../../../UI/AllCards/CategoryCard/index";
import { Col, Row } from "react-bootstrap";
import Loader from "../../Loader";
import { Link } from "react-router-dom";

const ShowAllCategories: React.FC<{
  isDataReady: boolean;
  cats: any[];
  type?: string;
}> = ({ isDataReady, cats, type = "category" }) => {
  const check = type === "category";
  const allCats =
    isDataReady &&
    cats.map((cat) => (
      <Col xl={2} lg={3} md={4} sm={6} xs={12} className="mt-3">
        <Link to={`/${check ? "category" : "sub-cat"}/${cat.id}`}>
          <CategoryCard
            name={check ? cat.cat_name : cat.subcat_name}
            src={check ? cat.cat_image : cat.main_image}
            alt={check ? cat.cat_name : cat.subcat_name}
            id={cat.id}
          />
        </Link>
      </Col>
    ));
  return <Row>{isDataReady ? allCats : <Loader many={18} type="items" />}</Row>;
};

export default ShowAllCategories;
