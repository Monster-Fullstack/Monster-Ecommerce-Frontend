import React, { Fragment } from "react";
import AllRoutes from "./routes";
import NavResponsive from "./components/main/NavResponsive";

export const SectionContent = "Some Of Our Exclusive Collection, You May Like";

const App = () => {
  return (
    <Fragment>
      <NavResponsive />
      <AllRoutes />
    </Fragment>
  );
};

export default App;
