import React from "react";
import TextPages from "../components/main/TextPages";
import PagesParent from "./PagesParent";

const Refund: React.FC = () => {
  return (
    <PagesParent>
      <TextPages title="Refund Policy">
        When returning an item, you have the option to choose your preferred
        refund method in the Online Returns Center. After the carrier receives
        your item, it can take up to two weeks for us to receive and process
        your return.
        <br />
        <br />
        We typically process returns within 3-5 business days after the carrier
        delivers the item to our Returns Center. When we complete processing
        your return, we issue a refund to the selected payment method. Learn how
        to Track Your Return.
        <h2 className="mt-4">Instant Refunds</h2>
        If you want to use your refund without waiting for us to process your
        return, you can select the Instant Refund option, if available. Instant
        refunds are either refunded to your credit card or issued as an
        MonStore.monsters Gift Card balance. You'll still need to return your
        items within 30 days.
      </TextPages>
    </PagesParent>
  );
};

export default Refund;
