import React from "react";

import ContactForm from "../components/contact/ContactForm";

function contact() {
  return (
    <>
      <div>
        <h1>Contact</h1>
        <hr className="w-5/12"></hr>
        <h3>Always looking for ways to connect!</h3>
      </div>
      <ContactForm />
    </>
  );
}

export default contact;
