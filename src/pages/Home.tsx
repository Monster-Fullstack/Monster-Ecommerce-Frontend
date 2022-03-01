import React from "react";
import FeaturedProducts from "../components/main/FeaturedProducts";
import CategorySection from "../components/main/CategorySection";
import Collection from "../components/main/Collection";
import NewArrival from "../components/main/NewArrival";
import HomeTopResponsive from "../components/main/HomeTop/HomeTopResponsive";
import PagesParent from "./PagesParent";

const Home: React.FC = () => {
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
