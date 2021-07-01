import React from "react";
// nextjs components
import Head from "next/head";

// components
import ContactForm from "../components/contact/ContactForm";

function contact() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="Contact us with a message!" />
      </Head>
      <div className="flex flex-col items-center">
        <h1 className="text-6xl font-light mt-14 mb-10">Contact</h1>
        <hr className="w-9/12 mb-10"></hr>
        <h3 className="font-light text-lg text-gray-600">
          Always looking for ways to connect!
        </h3>
      </div>
      <ContactForm />
    </>
  );
}

export default contact;
