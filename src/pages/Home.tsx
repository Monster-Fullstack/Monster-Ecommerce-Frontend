import React, { useEffect } from "react";
import FeaturedProducts, {
  DUMMY_PRODUCTS,
} from "../components/main/FeaturedProducts";
import CategorySection from "../components/main/CategorySection";
import Collection from "../components/main/Collection";
import NewArrival from "../components/main/NewArrival";
import HomeTopResponsive from "../components/main/HomeTop/HomeTopResponsive";
import PagesParent from "./PagesParent";
import axios, { AxiosResponse } from "axios";
import AppURL from "../api/AppURL";

const Home: React.FC = () => {
  const GetVisitorDetails = () => {
    axios
      .get(AppURL.VisitorDetails)
      .then()
      .catch();
  };

  useEffect(() => {
    GetVisitorDetails();
  }, []);
  return (
    <PagesParent>
      <HomeTopResponsive />
      <FeaturedProducts />
      <NewArrival items={DUMMY_PRODUCTS} />
      <CategorySection />
      <Collection />
    </PagesParent>
  );
};

export default Home;
