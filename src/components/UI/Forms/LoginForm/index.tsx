import React, { useContext, useState } from "react";
import { InputSite } from "../../Inputs";
import { ButtonSite } from "../../Buttons";
import FormParent from "../FormParent";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import LoginSchema from "./LoginSchema";
import { Link } from "react-router-dom";
import { ErrorForm } from "./../../Alerts/index";
import { NormalTitle } from "../../SectionTitle";
import { LoginFormProps } from "../../../../interfaces/Forms";
import AuthContext from "../../../../store/Auth";

const LoginForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { AuthUser } = useContext(AuthContext);
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<LoginFormProps>({
    resolver: yupResolver(LoginSchema()),
  });

  const onSubmit = (formData: LoginFormProps) => {
    // the request
    AuthUser("LOGIN", formData, reset, setLoading);
  };

  return (
    <>
      <FormParent onSubmit={handleSubmit(onSubmit)} title="">
        <NormalTitle className="text-start" title="Login Page" />
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
        <p>
          Forgot your password? <Link to="/forget">Forgot Password</Link>
        </p>
        <p>
          Don't have account? <Link to="/register">Register</Link>
        </p>
        <ButtonSite width="100%" type="submit">
          {!loading ? "Login" : "Loading..."}
        </ButtonSite>
      </FormParent>
    </>
  );
};

export default LoginForm;
