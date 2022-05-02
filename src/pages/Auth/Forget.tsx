import React from "react";
import MainForm from "../../components/main/MainForm";
import ForgetForm from "../../components/UI/Forms/ForgetForm";
// import ForgetPhoto from "../../assets/images/forget.png";
import PagesParent from "../PagesParent";
import { MainImage } from "../../components/UI/Images";
import ResetPhoto from "../../assets/images/reset.png";

const Forget: React.FC = () => {
  return (
    <PagesParent>
      <MainForm
        UsedForm={<ForgetForm />}
        rightSection={<MainImage src={ResetPhoto} alt="Forget Password" />}
      />
    </PagesParent>
  );
};

export default Forget;
