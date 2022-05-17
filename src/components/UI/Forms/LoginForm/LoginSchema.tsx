import * as yup from "yup";
import { passwordValidation } from "../../../../App";
import { LoginFormProps } from "../../../../interfaces/Forms";

const LoginSchema = () => {
  const schema: yup.SchemaOf<Partial<LoginFormProps>> = yup.object({
    email: yup.string().email().required(),
    password: yup
      .string()
      .required()
      .matches(
        passwordValidation,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
  });
  return schema;
};

export default LoginSchema;
