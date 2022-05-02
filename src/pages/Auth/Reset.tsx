import React from "react";
import PagesParent from "./../PagesParent";
import MainForm from "./../../components/main/MainForm/index";
import ResetForm from "./../../components/UI/Forms/ResetForm/index";
import { MainImage } from "../../components/UI/Images";
import ResetPhoto from "../../assets/images/reset.png";

const Reset = () => {
  return (
    <PagesParent>
      <MainForm
        UsedForm={<ResetForm />}
        rightSection={<MainImage src={ResetPhoto} alt="Reset Now" />}
      />
    </PagesParent>
  );
};

export default Reset;
