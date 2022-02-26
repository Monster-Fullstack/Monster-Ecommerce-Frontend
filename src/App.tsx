import React, {Fragment} from "react";
import AllRoutes from "./routes";
import NavResponsive from "./components/main/NavResponsive";
import FooterDesk from "./components/Layouts/Footers";

export const SectionContent = "Some Of Our Exclusive Collection, You May Like";

const App = () => {
    return (
        <Fragment>
            <NavResponsive/>
            <AllRoutes/>
            <FooterDesk/>
        </Fragment>
    );
};

export default App;
