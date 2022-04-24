import React from "react";
import { Form } from "react-bootstrap";
import { NormalTitle } from "../SectionTitle";

interface FormModel {
  title: string;
  onSubmit?: () => void;
}

const FormParent: React.FC<FormModel> = ({ children, title, onSubmit }) => {
  return (
    <Form onSubmit={onSubmit} className={`text-start onboardBanner`}>
      <NormalTitle title={title} main={false} content={""} />
      {children}
    </Form>
  );
};

export default FormParent;
