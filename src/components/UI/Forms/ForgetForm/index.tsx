import React, { useContext, useState } from "react";
import { InputSite } from "../../Inputs";
import { ButtonSite } from "../../Buttons";
import FormParent from "../FormParent";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ForgetSchema, { ForgetProps } from "./ForgetSchema";
import { ErrorForm } from "./../../Alerts/index";
import { NormalTitle } from "./../../SectionTitle/index";
import AuthContext from "../../../../store/Auth";

const ForgetForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { Forget } = useContext(AuthContext);
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<ForgetProps>({
    resolver: yupResolver(ForgetSchema()),
  });

  const onSubmit = async (formData: ForgetProps) => {
    Forget(formData, reset, setLoading);
  };

  return (
    <>
      <FormParent onSubmit={handleSubmit(onSubmit)} title="">
        <NormalTitle className="text-start" title="Forgot Password" />
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
        <ButtonSite width="100%" type="submit">
          {!loading ? "Reset Password" : "Loading..."}
        </ButtonSite>
      </FormParent>
    </>
  );
};

export default ForgetForm;
