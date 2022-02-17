import React, {Fragment} from "react";
import AllRoutes from "./routes";
import NavMenuDesk from "./components/Layouts/Navbars/NavMenuDesk";

export const SectionContent = "Some Of Our Exclusive Collection, You May Like";

const App = () => {
    return (
        <Fragment>
            <NavMenuDesk/>
            <AllRoutes/>
        </Fragment>
    );
};

export default App;