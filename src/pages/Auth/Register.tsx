import React from "react";
import PagesParent from "../Container/PagesParent";
import MainForm from "./../../components/main/MainForm/index";
import RegisterForm from "./../../components/UI/Forms/RegisterForm/index";
import { MainImage } from "../../components/UI/Images";
import RegisterPhoto from "../../assets/images/register.gif";

const Register = () => {
  return (
    <PagesParent>
      <MainForm
        UsedForm={<RegisterForm />}
        rightSection={<MainImage src={RegisterPhoto} alt="Register Now" />}
      />
    </PagesParent>
  );
};

export default Register;
