import React, {Fragment} from "react";
import FeaturedProducts from "../../components/main/FeaturedProducts";
import CategorySection from "../../components/main/CategorySection";
import Collection from "../../components/main/Collection";
import NewArrival from "../../components/main/NewArrival";
import HomeTop from "../../components/main/HomeTop";

const Home: React.FC = () => {
    return (
        <Fragment>
            <HomeTop/>
            <FeaturedProducts/>
            <NewArrival/>
            <CategorySection/>
            <Collection/>
        </Fragment>
    );
};

export default Home;