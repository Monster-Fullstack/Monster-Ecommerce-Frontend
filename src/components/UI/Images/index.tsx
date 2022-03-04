import React from "react";
import { ProductModel } from "./ProductModel";
import cl from "./index.module.scss";
import Image from "../../../interfaces/Image";

export const ProductImages: React.FC<ProductModel> = ({
  src,
  alt,
  className,
  style,
}) => {
  return (
    <img
      alt={alt}
      src={src}
      className={`${className}, ${cl.productImage}`}
      style={style}
    />
  );
};

export const MainImage: React.FC<Image> = ({ src, alt, className }) => {
  return <img src={src} className={`${cl.mainImg} ${className}`} alt={alt} />;
};
