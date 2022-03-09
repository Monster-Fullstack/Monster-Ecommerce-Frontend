import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormParent from "./../FormParent";
import { InputSite, TextAreaSite } from "./../../Inputs/index";
import { ButtonSite } from "./../../Buttons/index";
import { ErrorForm } from "../../Alerts";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import ContactSchema, { ContactProps } from "./ContactSchema";
import axios from "axios";
import AppURL from "../../../../api/AppURL";
import Toast from "../../Toasts";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<ContactProps>({
    resolver: yupResolver(ContactSchema()),
  });
  const onSubmit = async (Formdata: ContactProps) => {
    // to make the button loading...
    setLoading(true);
    // sending data to db
    axios.post(AppURL.ContactURL, Formdata).then((res) => {
      // if the message sent successfully
      if (res.status === 200 && res.data == 1) {
        // reset the data from form
        reset();
        // show success toast
        toast.success("Message Sent Successfully!", {
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
        <div className="mb-4">
          <Controller
            control={control}
            defaultValue=""
            render={({ field: { onBlur, onChange, value } }) => (
              <InputSite
                settings={{
                  type: "text",
                  placeholder: "Enter Your Name",
                  onChange: onChange,
                  onBlur: onBlur,
                  value: value,
                }}
              />
            )}
            name="name"
          />
          <ErrorForm error={errors.name} />
        </div>
        <div className="mb-4">
          <Controller
            control={control}
            defaultValue=""
            render={({ field: { onBlur, onChange, value } }) => (
              <InputSite
                settings={{
                  type: "text",
                  placeholder: "Enter Your Email",
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
              <TextAreaSite
                settings={{
                  placeholder: "Enter Your Message",
                  onChange: onChange,
                  onBlur: onBlur,
                  value: value,
                }}
              />
            )}
            name="message"
          />
          <ErrorForm error={errors.message} />
        </div>
        <ButtonSite width="100%" type="submit">
          {!loading ? "Send Message" : "Loading..."}
        </ButtonSite>
      </FormParent>
      <Toast />
    </>
  );
};

export default ContactForm;
