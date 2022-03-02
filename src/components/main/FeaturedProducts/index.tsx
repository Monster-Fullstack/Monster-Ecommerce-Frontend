import React from "react";
import SectionTitle from "../../UI/SectionTitle";
import MainContainer from "../../UI/MainContainer";
import SlicesProducts from "../../UI/SlicesProducts";
import Product from "../../../interfaces/Product";

export let DUMMY_PRODUCTS: Product[] = [
  {
    id: 1,
    name: "APPLE iPhone 12",
    price: 2500,
    description: "Red, 64 GB",
    src: "https://rukminim1.flixcart.com/image/416/416/kg8avm80/mobile/q/8/f/apple-iphone-12-dummyapplefsn-original-imafwg8drqaam5vu.jpeg?q=70",
    alt: "APPLE iPhone 12 (Red, 64 GB)",
  },
  {
    id: 2,
    name: "APPLE iPhone 12",
    price: 2500,
    description: "Red, 64 GB",
    src: "https://rukminim1.flixcart.com/image/416/416/kg8avm80/mobile/q/8/f/apple-iphone-12-dummyapplefsn-original-imafwg8drqaam5vu.jpeg?q=70",
    alt: "APPLE iPhone 12 (Red, 64 GB)",
  },
  {
    id: 3,
    name: "realme GT NEO 2",
    price: 499.99,
    description: "NEO Black, 128 GB  8 GB RAM",
    src: "https://rukminim1.flixcart.com/image/416/416/kumzpu80/mobile/h/x/v/gt-neo2-5g-rmx3370-realme-original-imag7puemtw7atdk.jpeg?q=70",
    alt: "realme GT NEO 2",
  },
  {
    id: 4,
    name: "realme GT NEO 2",
    price: 499.99,
    description: "NEO Black, 128 GB  8 GB RAM",
    src: "https://rukminim1.flixcart.com/image/416/416/kumzpu80/mobile/h/x/v/gt-neo2-5g-rmx3370-realme-original-imag7puemtw7atdk.jpeg?q=70",
    alt: "realme GT NEO 2",
  },
  {
    id: 5,
    name: "POCO F3 GT",
    price: 999.99,
    description: "Predator Black, 128 GB 8 GB RAM",
    src: "https://rukminim1.flixcart.com/image/416/416/krf91u80/mobile/i/f/m/f3-gt-mzb09huin-poco-original-imag57hec6wkrk77.jpeg?q=70",
    alt: "POCO F3 GT",
  },
  {
    id: 6,
    name: "Women Bralette",
    price: 49.99,
    description:
      "Non Padded Bra  (Multicolor) Non Padded Bra  (Multicolor) Non Padded Bra  (Multicolor)",
    src: "https://rukminim1.flixcart.com/image/800/960/k84t1u80/bra/2/r/q/non-padded-32-no-regular-regular-cb3-msl-piylu-original-imafq759bychs7cb.jpeg?q=50",
    alt: "Women Bralette Non Padded Bra",
  },
  {
    id: 7,
    name: "Women Bralette",
    price: 49.99,
    description: "Non Padded Bra  (Multicolor)",
    src: "https://rukminim1.flixcart.com/image/800/960/k84t1u80/bra/2/r/q/non-padded-32-no-regular-regular-cb3-msl-piylu-original-imafq759bychs7cb.jpeg?q=50",
    alt: "Women Bralette Non Padded Bra",
  },
];

const FeaturedProducts: React.FC = () => {
  return (
    <MainContainer>
      <SectionTitle
        title="featured products"
        content="Some Of Our Exclusive Collection, You May Like"
      />
      <SlicesProducts products={DUMMY_PRODUCTS} />
    </MainContainer>
  );
};

export default FeaturedProducts;
