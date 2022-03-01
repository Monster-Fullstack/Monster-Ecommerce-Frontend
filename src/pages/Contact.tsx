import React from "react";
import MainForm from "../components/main/MainForm";
import ContactForm from "../components/UI/Forms/ContactForm";
import Text from "../components/UI/Text";
import PagesParent from "./PagesParent";

const Contact: React.FC = () => {
  return (
    <PagesParent>
      <MainForm
        UsedForm={<ContactForm />}
        rightSection={
          <>
            <Text>
              1635 Franklin Street Montgomery, Near Sherwood Mall. <br />
              Support@monster.com
            </Text>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4278.609916407419!2d-74.29450934450016!3d40.68643651105052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3adf3ec0307cb%3A0xb40c30a16d1e0949!2sJersey%20Landscape%20%26%20Garden%20Supply!5e0!3m2!1sen!2seg!4v1646156053188!5m2!1sen!2seg"
              width="600"
              title="Our Direction"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </>
        }
      />
    </PagesParent>
  );
};

export default Contact;
