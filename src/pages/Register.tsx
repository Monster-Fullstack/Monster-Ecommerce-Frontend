import React from "react";
import MainForm from "../components/main/MainForm";
import LoginForm from "../components/UI/Forms/LoginForm";
import LoginPhoto from "../assets/images/login.png";
import PagesParent from "./PagesParent";
import { MainImage } from "../components/UI/Images";

const Register = () => {
  return (
    <PagesParent>
      <MainForm
        UsedForm={<LoginForm />}
        rightSection={<MainImage src={LoginPhoto} alt="Login Now" />}
      />
    </PagesParent>
  );
};

export default Register;
