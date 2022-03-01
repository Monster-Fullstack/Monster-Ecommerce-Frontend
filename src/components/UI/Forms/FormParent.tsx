import React from "react";
import { Form } from "react-bootstrap";
import { NormalTitle } from "../SectionTitle";
import cl from "./FormParent.module.scss";

const FormParent: React.FC<{ title: string }> = ({ children, title }) => {
  return (
    <Form className={`text-start ${cl.onboardBanner}`}>
      <NormalTitle title={title} main={false} content={""} />
      {children}
    </Form>
  );
};

export default FormParent;
