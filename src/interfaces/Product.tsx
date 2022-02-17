import Image from "./Image";
import ClassName from "./ClassName";

interface Product extends Image, ClassName {
    name: string,
    price: number,
}

export default Product;