import axios from "axios";
import React from "react";
import AppURL from "../../../../api/AppURL";
import usePrice from "../../../../hooks/usePrice";
import { ButtonBig } from "../../Buttons";
import { ErrorToast, WarningToast } from "../../Toasts/ToastType";
import cl from "./index.module.scss";

interface Total {
  price: number;
}

const TotalPriceCard: React.FC<Total> = ({ price }) => {
  const total = usePrice(price);

  const checkout = () => {
    if (price > 0) {
      axios
        .get(`${AppURL.CheckoutURL}${price}`)
        .then((response) => {
          const InvoiceURL = response.data.Data.InvoiceURL;
          // eslint-disable-next-line no-restricted-globals
          location.href = InvoiceURL;
        })
        .catch((error) => {
          ErrorToast(error.response.data.message);
        });
    } else {
      WarningToast("You don't have any products in the cart!");
    }
  };

  return (
    <div className={`${cl.parent}`}>
      <h5>Total:</h5>
      <h1>${total}</h1>
      <ButtonBig onClick={checkout} secondText="Pay Now">
        Checkout
      </ButtonBig>
    </div>
  );
};

export default TotalPriceCard;
