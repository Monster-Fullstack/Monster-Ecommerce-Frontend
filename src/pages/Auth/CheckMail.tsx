import React from "react";
import { MainImage } from "../../components/UI/Images";
import MainContainer from "../../components/UI/MainContainer";
import PagesParent from "../PagesParent";
import mailPhoto from "../../assets/images/check_mail.jpg";
import { Link } from "react-router-dom";

const CheckMail = () => {
  return (
    <PagesParent>
      <MainContainer>
        <h3>Check Your Email Address</h3>
        <p>
          Return To <Link to="/login">Login Page</Link>
        </p>
        <MainImage className="w-50" src={mailPhoto} />
      </MainContainer>
    </PagesParent>
  );
};

export default CheckMail;
