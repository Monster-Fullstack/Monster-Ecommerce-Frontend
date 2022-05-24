import React from "react";
import { NormalTitle } from "../SectionTitle";

interface FormModel {
  title: string;
  onSubmit?: () => void;
}

const FormParent: React.FC<FormModel> = ({ children, title, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className={`text-start onboardBanner`}>
      <NormalTitle title={title} main={false} content={""} />
      {children}
    </form>
  );
};

export default FormParent;
