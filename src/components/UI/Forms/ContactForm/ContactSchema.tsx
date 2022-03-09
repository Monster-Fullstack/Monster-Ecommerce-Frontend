import * as yup from "yup";

export type ContactProps = {
  name: string;
  email: string;
  message: string;
};

const ContactSchema = () => {
  const schema: yup.SchemaOf<Partial<ContactProps>> = yup.object({
    name: yup.string().min(4).max(20).required(),
    email: yup.string().email().required(),
    message: yup.string().min(25).required(),
  });
  return schema;
};

export default ContactSchema;
