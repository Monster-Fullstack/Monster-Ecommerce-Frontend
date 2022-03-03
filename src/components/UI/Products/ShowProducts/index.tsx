import React from "react";
import { Row } from "react-bootstrap";
import Product from "../../../../interfaces/Product";
import ProductCard from "../../AllCards/ProductCard";
import MainCol from "../../Cols/MainCol";

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
const ShowProducts: React.FC<Model> = ({ products, slices }) => {
  const allProducts = products.slice(0, slices).map((product, idx) => (
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

export default ShowProducts;
