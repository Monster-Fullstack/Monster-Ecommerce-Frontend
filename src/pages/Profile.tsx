import React from "react";
import ProfileMain from "../components/main/ProfileMain";
import MainContainer from "../components/UI/MainContainer";
import PagesParent from "./Container/PagesParent";

const Profile = () => {
  return (
    <PagesParent>
      <MainContainer>
        <ProfileMain />
      </MainContainer>
    </PagesParent>
  );
};

export default Profile;
