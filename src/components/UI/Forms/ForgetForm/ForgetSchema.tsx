import * as yup from "yup";

export type ForgetProps = {
  email: string;
};

const ForgetSchema = () => {
  const schema: yup.SchemaOf<Partial<ForgetProps>> = yup.object({
    email: yup.string().email().required(),
  });
  return schema;
};

export default ForgetSchema;
