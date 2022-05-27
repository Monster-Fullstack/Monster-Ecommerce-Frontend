import React from "react";
import Notifications from "../components/main/Notifications";
import PagesParent from "./Container/PagesParent";

const Notification: React.FC = () => {
  return (
    <PagesParent>
      <Notifications />
    </PagesParent>
  );
};

export default Notification;
