import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../../../../interfaces/Product";
import ProductCard from "../../AllCards/ProductCard";
import CategoryCard from "./../../AllCards/CategoryCard/index";
import { Link } from "react-router-dom";

type Model = {
  products: Product[];
  slices: number;
};

/**
 *
 * @param slices => if you want to show all the data put the length of array
 * for example: ShowProducts(products, products.length)
 * if you don't want to show all of them just type the number
 * for example: ShowProducts(products, 10)
 * then the products that showen are just 10 products
 * @returns all products
 */
const ShowProducts = ({ products, slices }) => {
  const allProducts = products.slice(0, slices).map((product, idx) => (
    <Col key={idx} xl={3} lg={3} md={4} sm={6} xs={12}>
      <ProductCard
        alt={product.alt}
        src={product.main_image}
        name={product.name}
        description={product.description}
        id={product.id}
        price={product.price}
      />
    </Col>
  ));
  return <Row className="w-100">{allProducts}</Row>;
};

export const ShowSubCat: React.FC<{ categories: any[] }> = ({ categories }) => {
  const allProducts = categories.map((cat, idx) => {
    const checkIfGame = cat.game;
    return (
      <Col key={idx} lg={3} md={4} sm={6} xs={12}>
        <Link to={`/sub-cat${!checkIfGame ? "" : "-games"}/${cat.id}`}>
          <CategoryCard src={cat.main_image} name={cat.subcat_name} />
        </Link>
      </Col>
    );
  });
  return <Row className="w-100">{allProducts}</Row>;
};

export default ShowProducts;
