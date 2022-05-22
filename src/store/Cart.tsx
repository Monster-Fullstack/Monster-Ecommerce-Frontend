import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import AppURL from "../api/AppURL";
import { ErrorToast } from "../components/UI/Toasts/ToastType";
import AuthContext from "./Auth";

const CartContext = React.createContext({
  count: 0,
  isCountReady: false,
  changeCount: () => {},
});

export const CartProvider: React.FC = ({ children }) => {
  const [count, setCount] = useState(0);
  const [isCountReady, setIsCountReady] = useState(false);
  const { loggedIn } = useContext(AuthContext);

  const changeCount = () => {
    const token = localStorage.getItem("token");
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    if (loggedIn && token.length > 0) {
      setIsCountReady(false);
      axios
        .get(AppURL.CartCountURL)
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
    <CartContext.Provider value={{ count, isCountReady, changeCount }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
