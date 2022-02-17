import React from "react";
import {ProductModel} from "./ProductModel";
import cl from "./index.module.scss";


export const ProductImages: React.FC<ProductModel> = ({src, alt, className, style}) => {
    return (
        <img
            alt={alt}
            src={src}
            className={`${className}, ${cl.productImage}`}
            style={style}
        />
    );
};
