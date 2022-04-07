import React, { useEffect } from "react";
import CategorySection from "../components/main/CategorySection";
import Collection from "../components/main/Collection";
import NewArrival from "../components/main/NewArrival";
import HomeTopResponsive from "../components/main/HomeTop/HomeTopResponsive";
import PagesParent from "./PagesParent";
import axios from "axios";
import AppURL from "../api/AppURL";
import FeaturedProducts from "./../components/main/FeaturedProducts/index";
import BestSellerProducts from "./../components/main/BestSellerProducts/index";
import UnderXDollars from "../components/main/UnderXDollars";
import BestFor from "../components/main/BestFor";

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
      <BestFor type="Gaming" />
      <FeaturedProducts />
      <BestSellerProducts />
      <UnderXDollars dollars={100} />
      <NewArrival />
      <Collection />
    </PagesParent>
  );
};

export default Home;
