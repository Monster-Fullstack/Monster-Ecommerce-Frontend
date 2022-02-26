import React, {Fragment} from "react";
import FeaturedProducts from "../components/main/FeaturedProducts";
import CategorySection from "../components/main/CategorySection";
import Collection from "../components/main/Collection";
import NewArrival from "../components/main/NewArrival";
import HomeTopResponsive from "../components/main/HomeTop/HomeTopResponsive";

const Home: React.FC = () => {
    return (
        <Fragment>
            <HomeTopResponsive/>
            <FeaturedProducts/>
            <NewArrival/>
            <CategorySection/>
            <Collection/>
        </Fragment>
    );
};

export default Home;