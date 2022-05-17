import * as yup from "yup";
import { passwordValidation } from "../../../../App";
import { RegisterFormProps } from "../../../../interfaces/Forms";

const RegisterSchema = () => {
  const schema: yup.SchemaOf<Partial<RegisterFormProps>> = yup.object({
    name: yup.string().min(5).required(),
    email: yup.string().email().required(),
    password: yup
      .string()
      .required()
      .matches(
        passwordValidation,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    password_confirmation: yup
      .string()
      .required("Passwords Confirmation Is Required")
      .test("passwords-match", "Passwords Must Match", function (value) {
        return this.parent.password === value;
      }),
  });
  return schema;
};

export default RegisterSchema;
