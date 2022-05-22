import React, { useContext, useState } from "react";
import { InputSite } from "../../Inputs";
import { ButtonSite } from "../../Buttons";
import FormParent from "../FormParent";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { ErrorForm } from "./../../Alerts/index";
import RegisterSchema from "./RegisterSchema";
import { NormalTitle } from "./../../SectionTitle/index";
import { RegisterFormProps } from "../../../../interfaces/Forms";
import AuthContext from "../../../../store/Auth";
import PhoneInput, {
  formatPhoneNumberIntl,
  formatPhoneNumber,
} from "react-phone-number-input";
import "react-phone-number-input/style.css";

const RegisterForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { AuthUser } = useContext(AuthContext);
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<RegisterFormProps>({
    resolver: yupResolver(RegisterSchema()),
  });

  const onSubmit = async (formData) => {
    formData["phone_number"] = formatPhoneNumber(formData["phone"]).trim();
    formData["phone_country"] = formatPhoneNumberIntl(formData["phone"]).split(
      " "
    )[0];

    AuthUser("REGISTER", formData, reset, setLoading);
  };

  return (
    <>
      <FormParent onSubmit={handleSubmit(onSubmit)} title="">
        <NormalTitle className="text-start" title="Register Page" />
        <div className="mb-4">
          <Controller
            control={control}
            defaultValue=""
            render={({ field: { onBlur, onChange, value } }) => (
              <>
                {/* @ts-ignore */}
                <PhoneInput
                  placeholder="Enter your phone number"
                  value={value}
                  onChange={onChange}
                  name="phone"
                />
              </>
            )}
            name="phone"
          />
          <ErrorForm error={errors?.phone} />
        </div>
        <div className="mb-4">
          <Controller
            control={control}
            defaultValue=""
            render={({ field: { onBlur, onChange, value } }) => (
              <InputSite
                settings={{
                  type: "name",
                  placeholder: "Enter Your Name",
                  onChange: onChange,
                  onBlur: onBlur,
                  value: value,
                }}
              />
            )}
            name="name"
          />
          <ErrorForm error={errors?.name} />
        </div>
        <div className="mb-4">
          <Controller
            control={control}
            defaultValue=""
            render={({ field: { onBlur, onChange, value } }) => (
              <InputSite
                settings={{
                  type: "email",
                  placeholder: "Enter Your Email Address",
                  onChange: onChange,
                  onBlur: onBlur,
                  value: value,
                }}
              />
            )}
            name="email"
          />
          <ErrorForm error={errors?.email} />
        </div>
        <div className="mb-4">
          <Controller
            control={control}
            defaultValue=""
            render={({ field: { onBlur, onChange, value } }) => (
              <InputSite
                settings={{
                  type: "password",
                  placeholder: "Enter Your Password",
                  onChange: onChange,
                  onBlur: onBlur,
                  value: value,
                }}
              />
            )}
            name="password"
          />
          <ErrorForm error={errors?.password} />
        </div>
        <div className="mb-4">
          <Controller
            control={control}
            defaultValue=""
            render={({ field: { onBlur, onChange, value } }) => (
              <InputSite
                settings={{
                  type: "password",
                  placeholder: "Confirm Your Password",
                  onChange: onChange,
                  onBlur: onBlur,
                  value: value,
                }}
              />
            )}
            name="password_confirmation"
          />
          <ErrorForm error={errors?.password_confirmation} />
        </div>
        <p>
          Already have account ? <Link to="/login">Login Now</Link>
        </p>
        <ButtonSite width="100%" type="submit">
          {!loading ? "Register" : "Loading..."}
        </ButtonSite>
      </FormParent>
    </>
  );
};

export default RegisterForm;
