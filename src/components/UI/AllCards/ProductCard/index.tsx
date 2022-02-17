import React from "react";
import {Card} from "react-bootstrap";
import cl from "./index.module.scss";
import {ProductImages} from "../../Images";
import Product from "../../../../interfaces/Product";

const ProductCard: React.FC<Product> = ({name, price, alt, src, className}) => {
    return (
        <Card className={`${cl.card} ${className}`} style={{width: "18rem"}}>
            <ProductImages
                src={src}
                alt={alt}
            />
            <Card.Body>
                <p className={cl.name}>{name}</p>
                <p className={cl.price}>${price}</p>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;