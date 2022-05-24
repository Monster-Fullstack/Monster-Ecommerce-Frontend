import React from "react";
import { MainImage } from "../../components/UI/Images";
import MainContainer from "../../components/UI/MainContainer";
import PagesParent from "../PagesParent";
import mailPhoto from "../../assets/images/check_mail.jpg";
import { Link } from "react-router-dom";

const VerifyMail = () => {
  return (
    <PagesParent>
      <MainContainer>
        <h3>Check your email address, confirm to verify your account</h3>
        <p>
          Return To The <Link to="/">Home Page</Link>
        </p>
        <MainImage className="w-50" src={mailPhoto} />
      </MainContainer>
    </PagesParent>
  );
};

export default VerifyMail;
