import * as yup from "yup";
import { passwordValidation } from "../../../../App";

export type ResetProps = {
  email: string;
  password: string;
  password_confirmation: string;
};

const ResetSchema = () => {
  const schema: yup.SchemaOf<Partial<ResetProps>> = yup.object({
    email: yup.string().email().required(),
    password: yup
      .string()
      .required("The New Password Is Required")
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

export default ResetSchema;
