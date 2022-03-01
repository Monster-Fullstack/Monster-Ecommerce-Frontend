import React from "react";
import { InputSite } from "../../Inputs";
import { ButtonSite } from "../../Buttons";
import FormParent from "../FormParent";

type Props = {};

const ContactForm: React.FC = () => {
  return (
    <FormParent title="Contact With Us">
      <InputSite
        settings={{
          type: "email",
          placeholder: "Enter Email Address",
        }}
        className="mt-2"
      />
      <InputSite
        settings={{
          type: "text",
          placeholder: "Enter Your Message",
        }}
        className="mt-4"
      />
      <ButtonSite width="100%" className="mt-4">
        Send
      </ButtonSite>
    </FormParent>
  );
};

export default ContactForm;
