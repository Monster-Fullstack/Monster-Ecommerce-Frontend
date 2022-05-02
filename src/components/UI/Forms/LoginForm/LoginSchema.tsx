import * as yup from "yup";

export type LoginProps = {
  email: string;
  password: string;
};

const LoginSchema = () => {
  const schema: yup.SchemaOf<Partial<LoginProps>> = yup.object({
    email: yup.string().email().required(),
    password: yup
      .string()
      .required()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
  });
  return schema;
};

export default LoginSchema;
