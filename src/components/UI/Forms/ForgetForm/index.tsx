import React, { useState } from "react";
import { InputSite } from "../../Inputs";
import { ButtonSite } from "../../Buttons";
import FormParent from "../FormParent";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ForgetSchema, { ForgetProps } from "./ForgetSchema";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AppURL from "./../../../../api/AppURL";
import { toast } from "react-toastify";
import { ErrorForm } from "./../../Alerts/index";
import Toast from "../../Toasts";
import { NormalTitle } from "./../../SectionTitle/index";

const ForgetForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<ForgetProps>({
    resolver: yupResolver(ForgetSchema()),
  });

  const onSubmit = async (Formdata: ForgetProps) => {
    // to make the button loading...
    setLoading(true);
    // sending data to db
    axios.post(AppURL.ForgetURL, Formdata).then((res) => {
      // if the message sent successfully
      if (res.status === 200 && res.data == 1) {
        // reset the data from form
        reset();
        // show success toast
        toast.success("Forget Successfully", {
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
          nav("/check_mail");
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
      <Toast />
    </>
  );
};

export default ForgetForm;
