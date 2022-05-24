import * as yup from "yup";
import { passwordValidation } from "../../../../App";
import { RegisterFormProps } from "../../../../interfaces/Forms";

const RegisterSchema = () => {
  var nameRegex = /^[a-zA-Z ]{2,30}$/;
  const schema: yup.SchemaOf<Partial<RegisterFormProps>> = yup.object({
    name: yup
      .string()
      .required()
      .matches(nameRegex, "Please enter a valid name"),
    email: yup.string().email().required(),
    phone: yup
      .string()
      .required("your phone number is a required field")
      .min(8, "Please enter a valid phone number")
      .max(20, "Please enter a valid phone number"),
    photo: yup
      .mixed()
      .required("Your photo is required")
      .test("type", "The types supported are [ png, jpg, jpeg ]", (value) => {
        if (value[0]?.type) {
          return (
            value[0].type === "image/jpg" ||
            value[0].type === "image/png" ||
            value[0].type === "image/jpeg"
          );
        }
      }),
    password: yup
      .string()
      .required()
      .matches(
        passwordValidation,
        "Must contain 8 characters, one uppercase, one lowercase, one number and one special case Character"
      ),
    password_confirmation: yup
      .string()
      .required("Passwords confirmation is required")
      .test("passwords-match", "Passwords must match", function (value) {
        return this.parent.password === value;
      }),
  });
  return schema;
};

export default RegisterSchema;
