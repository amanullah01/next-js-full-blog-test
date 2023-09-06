import ContactForm from "@/components/contact/contact-form";
import Head from "next/head";
import { Fragment } from "react";

const ConatactPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact Form</title>
        <meta name="description" content="Send me message" />
      </Head>
      <ContactForm />
    </Fragment>
  );
};

export default ConatactPage;
