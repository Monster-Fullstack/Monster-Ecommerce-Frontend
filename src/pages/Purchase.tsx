import React from "react";
import PagesParent from "./PagesParent";
import TextPages from "../components/main/TextPages";

const Purchase: React.FC = () => {
  return (
    <PagesParent>
      <TextPages title="How To Purchase">
        Like a real-life supermarket, on Amazon, you’ll first need to find the
        item you want, add it to your shopping cart, and then check out. Once
        you get the hang of shopping in a virtual space, it’s really quite
        simple. But if you’re a beginner, we’ve got you covered here with some
        basic instructions on how to buy on MonStore.monster
        <br />
        <ul>
          <li>Sign in to your MonStore account.</li>
          <li>Hover over Departments and click on a category.</li>
          <li>
            When you find an item you want, click on it. Review the item, and
            click Add to Cart. Click Proceed to Checkout. Enter a shipping
            address and click Continue.
          </li>
          <li>
            Choose a payment method and click Continue. Click Place Your Order.
          </li>
        </ul>
      </TextPages>
    </PagesParent>
  );
};

export default Purchase;
