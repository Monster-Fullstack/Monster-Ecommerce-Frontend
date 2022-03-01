import React from "react";
import TextPages from "../components/main/TextPages";
import PagesParent from "./PagesParent";

const Privacy: React.FC = () => {
  return (
    <PagesParent>
      <TextPages title="Privacy Policy">
        We know that you care how information about you is used and shared, and
        we appreciate your trust that we will do so carefully and sensibly. This
        Privacy Notice describes how MonStore.com and its affiliates
        (collectively "MonStore") collect and process your personal information
        through MonStore websites, devices, products, services, online and
        physical stores, and applications that reference this Privacy Notice
        (together "MonStore Services"). By using MonStore Services, you are
        consenting to the practices described in this Privacy Notice.
        <h2 className="mt-4">
          What Personal Information About Customers Does MonStore Collect?
        </h2>
        Information You Give Us: We receive and store any information you
        provide in relation to MonStore Services. Click here to see examples of
        what we collect. You can choose not to provide certain information, but
        then you might not be able to take advantage of many of our MonStore
        Services. Automatic Information: We automatically collect and store
        certain types of information about your use of MonStore Services,
        including information about your interaction with content and services
        available through MonStore Services. Like many websites, we use
        "cookies" and other unique identifiers, and we obtain certain types of
        information when your web browser or device accesses MonStore Services
        and other content served by or on behalf of MonStore on other websites.
        Click here to see examples of what we collect. Information from Other
        Sources: We might receive information about you from other sources, such
        as updated delivery and address information from our carriers, which we
        use to correct our records and deliver your next purchase more easily.
        Click here to see additional examples of the information we receive.
        <h2 className="mt-4">
          For What Purposes Does MonStore Use Your Personal Information?
        </h2>
        Purchase and delivery of products and services. We use your personal
        information to take and handle orders, deliver products and services,
        process payments, and communicate with you about orders, products and
        services, and promotional offers. Provide, troubleshoot, and improve
        MonStore Services. We use your personal information to provide
        functionality, analyze performance, fix errors, and improve the
        usability and effectiveness of the MonStore Services. Recommendations
        and personalization. We use your personal information to recommend
        features, products, and services that might be of interest to you,
        identify your preferences, and personalize your experience with MonStore
        Services. Provide voice, image and camera services. When you use our
        voice, image and camera services, we use your voice input, images,
        videos, and other personal information to respond to your requests,
        provide the requested service to you, and improve our services. For more
        information about Alexa voice services , click here. Comply with legal
        obligations. In certain cases, we collect and use your personal
        information to comply with laws. For instance, we collect from sellers
        information regarding place of establishment and bank account
        information for identity verification and other purposes. Communicate
        with you. We use your personal information to communicate with you in
        relation to MonStore Services via different channels (e.g., by phone,
        email, chat). Advertising. We use your personal information to display
        interest-based ads for features, products, and services that might be of
        interest to you. We do not use information that personally identifies
        you to display interest-based ads. To learn more, please read our
        Interest-Based Ads notice. Fraud Prevention and Credit Risks. We use
        personal information to prevent and detect fraud and abuse in order to
        protect the security of our customers, MonStore, and others. We may also
        use scoring methods to assess and manage credit risks.
      </TextPages>
    </PagesParent>
  );
};

export default Privacy;
