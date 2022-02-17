import React from "react";
import cl from "./index.module.scss";
import {Card} from "react-bootstrap";
import Category from "../../../../interfaces/Category";

const CategoryCard: React.FC<Category> = ({src, alt, name, className}) => {
    return (
        <Card className={`h-100 w-100 text-center ${className} ${cl.categoryCard}`}>
            <Card.Body>
                <img className="center" alt={alt} src={src}/>
                <h5 className={cl.categoryName}>{name}</h5>
            </Card.Body>
        </Card>
    );
};

export default CategoryCard;