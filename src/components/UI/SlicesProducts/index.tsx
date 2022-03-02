import React from "react";
import { Row } from "react-bootstrap";
import Product from "../../../interfaces/Product";
import ProductCard from "../AllCards/ProductCard";
import MainCol from "../Cols/MainCol";

type Model = {
  products: Product[];
};

const SlicesProducts: React.FC<Model> = ({ products }) => {
  const allProducts = products.slice(0, 6).map((product, idx) => (
    <MainCol key={idx}>
      <ProductCard
        alt={product.alt}
        src={product.src}
        name={product.name}
        description={product.description}
        id={product.id}
        price={product.price}
      />
    </MainCol>
  ));
  return <Row>{allProducts}</Row>;
};

export default SlicesProducts;
