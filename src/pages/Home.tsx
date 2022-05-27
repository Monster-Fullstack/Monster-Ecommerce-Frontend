import React, { useEffect } from "react";
import CategorySection from "../components/main/Category/CategorySection";
import Collection from "../components/main/Collection";
import NewArrival from "../components/main/Product/NewArrival";
import HomeTopResponsive from "../components/main/HomeTop/HomeTopResponsive";
import PagesParent from "./Container/PagesParent";
import axios from "axios";
import AppURL from "../api/AppURL";
import FeaturedProducts from "./../components/main/Product/FeaturedProducts/index";
import BestSellerProducts from "./../components/main/Product/BestSellerProducts/index";
import UnderXDollars from "../components/main/Product/UnderXDollars";

const Home: React.FC = () => {
  const GetVisitorDetails = () => {
    axios.get(AppURL.VisitorDetails).then().catch();
  };

  useEffect(() => {
    GetVisitorDetails();
  }, []);
  return (
    <PagesParent>
      <HomeTopResponsive />
      <CategorySection />
      <FeaturedProducts />
      <BestSellerProducts />
      <UnderXDollars dollars={100} />
      <NewArrival />
      <Collection />
    </PagesParent>
  );
};

export default Home;
