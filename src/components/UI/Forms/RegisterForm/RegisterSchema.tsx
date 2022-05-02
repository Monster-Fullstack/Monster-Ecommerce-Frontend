import * as yup from "yup";

export type RegisterProps = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
};

const RegisterSchema = () => {
  const schema: yup.SchemaOf<Partial<RegisterProps>> = yup.object({
    name: yup.string().min(5).required(),
    email: yup.string().email().required(),
    password: yup
      .string()
      .required()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    passwordConfirmation: yup
      .string()
      .required("Passwords Confirmation Is Required")
      .test("passwords-match", "Passwords Must Match", function (value) {
        return this.parent.password === value;
      }),
  });
  return schema;
};

export default RegisterSchema;
