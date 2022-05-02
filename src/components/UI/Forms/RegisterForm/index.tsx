import React, { useState } from "react";
import { InputSite } from "../../Inputs";
import { ButtonSite } from "../../Buttons";
import FormParent from "../FormParent";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AppURL from "./../../../../api/AppURL";
import { toast } from "react-toastify";
import { ErrorForm } from "./../../Alerts/index";
import Toast from "../../Toasts";
import RegisterSchema, { RegisterProps } from "./RegisterSchema";
import { NormalTitle } from "./../../SectionTitle/index";

const RegisterForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<RegisterProps>({
    resolver: yupResolver(RegisterSchema()),
  });

  const onSubmit = async (Formdata: RegisterProps) => {
    // to make the button loading...
    setLoading(true);
    // sending data to db
    axios.post(AppURL.RegisterURL, Formdata).then((res) => {
      // if the message sent successfully
      if (res.status === 200 && res.data == 1) {
        // reset the data from form
        reset();
        // show success toast
        toast.success("Your Account Is Created Successfully", {
          position: "bottom-right",
          autoClose: 2400,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        // close loading
        setLoading(false);
        // go to the home page after 2.5 seconds
        const timer = setTimeout(() => {
          nav("/");
          clearTimeout(timer);
        }, 2500);
      } else {
        toast.error("Something went wrong, Please try again later", {
          position: "bottom-right",
          autoClose: 2400,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    });
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
            name="passwordConfirmation"
          />
          <ErrorForm error={errors?.passwordConfirmation} />
        </div>
        <p>
          Already have account ? <Link to="/login">Login Now</Link>
        </p>
        <ButtonSite width="100%" type="submit">
          {!loading ? "Register" : "Loading..."}
        </ButtonSite>
      </FormParent>
      <Toast />
    </>
  );
};

export default RegisterForm;
