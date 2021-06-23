import React from "react";

function ContactForm() {
  return (
    <form className="mx-auto w-5/12 mt-10 -space-y-5">
      <div className="flex flex-row space-x-3 mb-5">
        <div>
          <label className="text-gray-600 font-light" htmlFor="firstName">
            First Name *
          </label>
          <input
            className="w-full mt-2 mb-6 px-4 py-2 border  text-gray-700 focus:outline-none focus:border-black bg-gray-50"
            type="text"
            id="firstName"
            required
          />
        </div>
        <div>
          <label className="text-gray-600 font-light" htmlFor="lastName">
            Last Name *
          </label>
          <input
            className="w-full mt-2 mb-6 px-4 py-2 border  text-gray-700 focus:outline-none focus:border-black bg-gray-50 "
            type="text"
            id="lastName"
            required
          />
        </div>
      </div>
      <div>
        <label className="text-gray-600 font-light" htmlFor="email">
          Email *
        </label>
        <input
          className="w-full mt-2 mb-6 px-4 py-2 border  text-gray-700 focus:outline-none focus:border-black bg-gray-50"
          type="text"
          id="email"
          required
        />
      </div>
      <div>
        <label className="text-gray-600 font-light" htmlFor="subject">
          Subject *
        </label>
        <input
          className="w-full mt-2 mb-6 px-4 py-2 border  text-gray-700 focus:outline-none focus:border-black bg-gray-50"
          type="text"
          id="subject"
          required
        />
      </div>
      <div>
        <label className="text-gray-600 font-light" htmlFor="message">
          Message *
        </label>
        <textarea
          className="w-full mt-2 mb-6 px-4 py-2 border rounded-sm text-gray-700 focus:outline-none focus:border-black bg-gray-50"
          rows="3"
          required
        ></textarea>
      </div>
    </form>
  );
}

export default ContactForm;
