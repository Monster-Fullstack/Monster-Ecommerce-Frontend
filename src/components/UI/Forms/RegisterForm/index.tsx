import React, { useContext, useRef, useState } from "react";
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
import { Row } from "react-bootstrap";

const RegisterForm: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const { AuthUser } = useContext(AuthContext);
  const imageRef = useRef<HTMLImageElement>();

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
    register,
  } = useForm<RegisterFormProps>({
    resolver: yupResolver(RegisterSchema()),
  });

  const onSubmit = async (formData) => {
    const form = new FormData();

    form.append("photo", formData["photo"][0]);
    form.append("phone_number", formatPhoneNumber(formData["phone"]).trim());
    form.append(
      "phone_country",
      formatPhoneNumberIntl(formData["phone"]).split(" ")[0]
    );
    form.append("name", formData["name"]);
    form.append("email", formData["email"]);
    form.append("password", formData["password"]);
    form.append("password_confirmation", formData["password_confirmation"]);

    AuthUser("REGISTER", form, reset, setLoading);
  };

  var loadFile = function (event) {
    register("photo").onChange(event.target);
    var image = imageRef.current;
    image.src = URL.createObjectURL(event.target.files[0]);
  };

  return (
    <>
      <FormParent onSubmit={handleSubmit(onSubmit)} title="">
        <NormalTitle className="text-start" title="Register Page" />
        <Row>
          <div className="mb-4 col-md-4">
            <div className="profile-pic">
              <label className="-label" htmlFor="file">
                <span className="glyphicon glyphicon-camera"></span>
                <span>Change Image</span>
              </label>
              <input
                name="photo"
                id="file"
                type="file"
                {...register("photo")}
                onChange={(eo) => {
                  register("photo").onChange(eo);
                  loadFile(eo);
                }}
              />
              <img
                src="https://timesaver247.com/wp-content/uploads/2020/10/default-user-image.png"
                id="output"
                ref={imageRef}
                width="200"
              />
            </div>
            <ErrorForm error={errors?.photo} />
          </div>
          <div className="mb-4 col-md-8">
            <Controller
              control={control}
              defaultValue=""
              render={({ field: { onChange, value } }) => (
                // @ts-ignore
                <PhoneInput
                  placeholder="Enter your phone number"
                  value={value}
                  onChange={onChange}
                  name="phone"
                />
              )}
              name="phone"
            />
            <ErrorForm error={errors?.phone} />
          </div>
        </Row>
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
