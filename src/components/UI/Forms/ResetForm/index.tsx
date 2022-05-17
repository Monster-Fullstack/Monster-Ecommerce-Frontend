import React, { useContext, useState } from "react";
import { InputSite } from "../../Inputs";
import { ButtonSite } from "../../Buttons";
import FormParent from "../FormParent";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams } from "react-router-dom";
import { ErrorForm } from "./../../Alerts/index";
import ResetSchema, { ResetProps } from "./ResetSchema";
import { NormalTitle } from "./../../SectionTitle/index";
import AuthContext from "../../../../store/Auth";

const ResetForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  // the token
  const { token } = useParams();
  // auth context
  const { Reset } = useContext(AuthContext);
  // to redirect to the home page

  // the form component
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<ResetProps>({
    resolver: yupResolver(ResetSchema()),
  });

  // when submit the form
  const onSubmit = async (formData: ResetProps) => {
    formData["token"] = token;
    Reset(formData, reset, setLoading);
  };

  return (
    <>
      <FormParent onSubmit={handleSubmit(onSubmit)} title="">
        <NormalTitle className="text-start" title="Reset Password" />
        <div className="mb-4">
          <Controller
            control={control}
            defaultValue=""
            render={({ field: { onBlur, onChange, value } }) => (
              <InputSite
                settings={{
                  type: "text",
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
                  placeholder: "Enter Your New Password",
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
        <ButtonSite width="100%" type="submit">
          {!loading ? "Reset Password" : "Loading..."}
        </ButtonSite>
      </FormParent>
    </>
  );
};

export default ResetForm;
