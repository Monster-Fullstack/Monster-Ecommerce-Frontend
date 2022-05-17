import React, { useEffect, useState } from "react";
import axios from "axios";
import User from "../interfaces/User";
import AppURL from "../api/AppURL";
import { LoginFormProps, RegisterFormProps } from "../interfaces/Forms";
import { ErrorToast, SuccessToast } from "../components/UI/Toasts/ToastType";
import { useNavigate } from "react-router-dom";

const isLoggedIn = !!localStorage.getItem("token");

const AuthContext = React.createContext({
  loggedIn: false,
  user: {
    id: 1,
    name: "",
    email: "",
    profile_photo_url: "",
  },
  AuthUser: (
    type: "LOGIN" | "REGISTER",
    formData: LoginFormProps,
    reset: () => void,
    setLoading
  ) => {},
  Logout: () => {},
  Forget: (formData: { email: string }, reset, setLoading) => {},
  Reset: (formData: { email: string }, reset, setLoading) => {},
});

export const AuthProvider: React.FC = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User>();
  const nav = useNavigate();

  useEffect(() => {
    // if the user is logged in before and opened the app again
    if (isLoggedIn) {
      getUser();
    }
  }, []);

  // get user data by token
  const getUser = () => {
    // put the data of user inside the user state by the token
    axios
      .get(AppURL.UserURL)
      .then((response) => {
        setLoggedIn(true);
        setUser({
          id: response.data.id,
          name: response.data.name,
          email: response.data.email,
          profile_photo_url: response.data.profile_photo_url,
        });
      })
      .catch((error) => {
        setLoggedIn(false);
        localStorage.clear();
      });
  };

  // For Login or Register the user
  const AuthUser = (
    type: "LOGIN" | "REGISTER",
    formData: LoginFormProps | RegisterFormProps,
    reset: () => void,
    setLoading
  ) => {
    setLoading(true);
    axios
      .post(type === "LOGIN" ? AppURL.LoginURL : AppURL.RegisterURL, formData)
      .then((response) => {
        // set the user in login mode
        setLoggedIn(true);
        localStorage.setItem("token", response.data.token);
        // reset the data from form
        reset();
        // show success toast
        SuccessToast(response.data.message);
        setLoading(false);
        // set the user in the user data
        setUser({
          id: response.data.user.id,
          name: response.data.user.name,
          email: response.data.user.email,
          profile_photo_url: response.data.user.profile_photo_url,
        });
        // go to the home page after 2.5 seconds
        nav("/");
      })
      .catch((error) => {
        ErrorToast(error.response.data.message);
        setLoading(false);
      });
  };

  const Logout = () => {
    nav("/");
    setLoggedIn(false);
    setUser(null);
    axios
      .post(AppURL.LogoutURL)
      .then((response) => {
        SuccessToast(response.data.message);
      })
      .catch((error) => {
        ErrorToast(error.response.data.message);
      });
    localStorage.clear();
  };

  const Forget = (formData: { email: string }, reset, setLoading) => {
    setLoading(true);
    axios
      .post(AppURL.ForgetURL, formData)
      .then((response) => {
        reset();
        SuccessToast(response.data.message);
        nav("/check_mail");
        setLoading(false);
      })
      .catch((error) => {
        ErrorToast(error.response.data.message);
        setLoading(false);
      });
  };

  const Reset = (formData: { email: string }, reset, setLoading) => {
    setLoading(true);
    console.log(formData);
    axios
      .post(AppURL.ResetURL, formData)
      .then((response) => {
        reset();
        SuccessToast(response.data.message);
        setLoading(false);
        const timer = setTimeout(() => {
          nav("/login");
          clearTimeout(timer);
        }, 2000);
      })
      .catch((error) => {
        ErrorToast(error.response.data.message);
        setLoading(false);
      });
  };

  // register method will made soon

  return (
    <AuthContext.Provider
      value={{ loggedIn, user, AuthUser, Logout, Forget, Reset }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
