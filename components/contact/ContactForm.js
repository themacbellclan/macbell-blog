import React, { useState, useEffect } from "react";
import Notification from "./Notification";

function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState();
  const [messageError, setMessageError] = useState();

  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setStatus(null);
        setMessageError(null);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, status);

  async function sentMessageData(messageDetails) {
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(messageDetails),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Something went wrong");
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    setStatus("loading");

    try {
      await sentMessageData({
        firstName: firstName,
        lastName: lastName,
        email: email,
        subject: subject,
        message: message,
      });
      setStatus("success");
    } catch (error) {
      setMessageError(error.message);
      setStatus("error");
    }
  }

  let notification;

  if (status === "pending") {
    notification = {
      status: "pending",
      title: "Sending message",
      message: "Message on the way",
    };
  }

  if (status === "success") {
    notification = {
      status: "success",
      title: "Success",
      message: "Message sent!",
    };
  }

  if (status === "error") {
    notification = {
      status: "error",
      title: "Error",
      message: messageError,
    };
  }

  return (
    <div className="relative mb-10">
      <form
        onSubmit={handleSubmit}
        className="mx-auto w-8/12 mt-10 -space-y-5 md:w-5/12"
      >
        <div className="flex flex-row space-x-3 mb-5">
          <div>
            <label className="text-gray-600 font-light" htmlFor="firstName">
              First Name *
            </label>
            <input
              className="w-full mt-2 mb-6 px-4 py-2 border  text-gray-700 focus:outline-none focus:border-black bg-gray-50 text-xs"
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="text-gray-600 font-light" htmlFor="lastName">
              Last Name *
            </label>
            <input
              className="w-full mt-2 mb-6 px-4 py-2 border  text-gray-700 focus:outline-none focus:border-black bg-gray-50 text-xs"
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
        </div>
        <div>
          <label className="text-gray-600 font-light" htmlFor="email">
            Email *
          </label>
          <input
            className="w-full mt-2 mb-6 px-4 py-2 border  text-gray-700 focus:outline-none focus:border-black bg-gray-50 text-xs"
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="text-gray-600 font-light" htmlFor="subject">
            Subject *
          </label>
          <input
            className="w-full mt-2 mb-6 px-4 py-2 border  text-gray-700 focus:outline-none focus:border-black bg-gray-50 text-xs"
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="text-gray-600 font-light" htmlFor="message">
            Message *
          </label>
          <textarea
            className="w-full mt-2 mb-6 px-4 py-2 border rounded-sm text-gray-700 focus:outline-none focus:border-black bg-gray-50 text-xs"
            rows="3"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className=" text-sm font-light border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-gray-100 px-4 py-2"
        >
          Submit
        </button>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </div>
  );
}

export default ContactForm;
