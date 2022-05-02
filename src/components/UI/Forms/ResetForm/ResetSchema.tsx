import * as yup from "yup";

export type ResetProps = {
  pincode: number;
  email: string;
  password: string;
  passwordConfirmation: string;
};

const ResetSchema = () => {
  const schema: yup.SchemaOf<Partial<ResetProps>> = yup.object({
    pincode: yup
      .number()
      .typeError("Pin Code must be numbers")
      .required("Pin Code Is Required"),
    email: yup.string().email().required(),
    password: yup
      .string()
      .required("The New Password Is Required")
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

export default ResetSchema;
