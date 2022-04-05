import React, { useEffect } from "react";
import CategorySection from "../components/main/CategorySection";
import Collection from "../components/main/Collection";
import NewArrival from "../components/main/NewArrival";
import HomeTopResponsive from "../components/main/HomeTop/HomeTopResponsive";
import PagesParent from "./PagesParent";
import axios from "axios";
import AppURL from "../api/AppURL";
import FeaturedProducts from "./../components/main/FeaturedProducts/index";

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
      <FeaturedProducts />
      <NewArrival />
      <CategorySection />
      <Collection />
    </PagesParent>
  );
};

export default Home;
