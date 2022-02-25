import React from "react";
import {Card} from "react-bootstrap";
import cl from "./index.module.scss";
import {ProductImages} from "../../Images";
import Product from "../../../../interfaces/Product";
import {ButtonProduct} from "../../Buttons";

const ProductCard: React.FC<Product> =
    ({name, price, description, alt, src, className}) => {
        return (
            <Card className={`${cl.card} ${className}`} style={{width: "18rem"}}>
                <ProductImages
                    src={src}
                    alt={alt}
                />
                <Card.Body>
                    <p className={cl.name}>{name}</p>
                    <p className={cl.description}>{description.slice(0, 55)}
                        {description.length > 55 && "..."}
                    </p>
                    <p className={cl.price}>
                        <span className={cl.dollar}>$</span>{price}
                    </p>
                    <ButtonProduct/>
                </Card.Body>
            </Card>
        );
    };

export default ProductCard;