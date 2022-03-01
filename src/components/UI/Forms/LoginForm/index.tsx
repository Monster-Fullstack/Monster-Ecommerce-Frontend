import React from "react";
import { InputSite } from "../../Inputs";
import { ButtonSite } from "../../Buttons";
import FormParent from "../FormParent";

const LoginForm: React.FC = () => {
  return (
    <FormParent title="Sign In">
      <InputSite
        settings={{
          type: "text",
          placeholder: "Enter Mobile Number",
        }}
        className="mt-2"
      />
      <ButtonSite width="100%" className="mt-4">
        Next
      </ButtonSite>
    </FormParent>
  );
};

export default LoginForm;
