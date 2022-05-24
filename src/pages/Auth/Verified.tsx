import React from "react";
import { MainImage } from "../../components/UI/Images";
import MainContainer from "../../components/UI/MainContainer";
import PagesParent from "../PagesParent";
import mailPhoto from "../../assets/images/check_mail.jpg";
import { Link, useParams } from "react-router-dom";
import useGet from "../../hooks/useGet";

const Verified = () => {
  const { token } = useParams();
  useGet("account/verify/" + token);
  return (
    <PagesParent>
      <MainContainer>
        <h3>Your email has been verified successfully</h3>
        <p>
          Return To The <Link to="/">Home Page</Link>
        </p>
        <MainImage className="w-50" src={mailPhoto} />
      </MainContainer>
    </PagesParent>
  );
};

export default Verified;
