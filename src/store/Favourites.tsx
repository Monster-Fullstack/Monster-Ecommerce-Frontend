import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import AppURL from "../api/AppURL";
import { ErrorToast } from "../components/UI/Toasts/ToastType";
import AuthContext from "./Auth";

const FavouritesContext = React.createContext({
  count: 0,
  isCountReady: false,
  changeCount: () => {},
});

export const FavouritesProvider: React.FC = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isCountReady, setIsCountReady] = useState(false);
  const { loggedIn } = useContext(AuthContext);

  const changeCount = () => {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    if (loggedIn && token.length > 0) {
      setIsCountReady(false);
      axios
        .get(AppURL.FavouritesCountURL)
        .then((response) => {
          setCount(response.data);
          setIsCountReady(true);
        })
        .catch((error) => {
          ErrorToast(error.response.data.message);
          setIsCountReady(true);
        });
    }
  };

  useEffect(() => {
    changeCount();
  }, [loggedIn]);

  return (
    <FavouritesContext.Provider value={{ count, isCountReady, changeCount }}>
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContext;
