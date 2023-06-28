import React, { useState, useEffect } from "react";
import { postMessage } from "../backend/api";

export const Contact = ({ about, isLoading }) => {
  const [messageSubmitted, setMessageSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleTextAreaChange = (event) => {
    console.log(event);
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const contactInfo = { email: email, name: name, message: message };

    postMessage(contactInfo)
      .then(() => {
        setMessage("");
        setEmail("");
        setName("");
        setMessageSubmitted(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    setMessageSubmitted(false);
  }, []);

  return !isLoading ? (
    <section className="pt-5 pb-5 d-flex justify-content-center">
      <section className="d-flex border">
        <div className="align-items-center d-flex flex-column justify-content-center ms-5 ps-5 w-100 contact-img-section">
          <img
            src={require("../avatar/avatar-contact.png")}
            alt="Contact Avatar"
            className="img-fluid avatar align-items-center justify-content-center"
          />
        </div>
        <div className="ms-5 me-5 pe-5">
          <div className="d-flex flex-column align-items-start">
            <h2 className="pt-5">Contact Jason</h2>
            <p className="pt-4">E: {about.email}</p>
            <p>M: {about.phone}</p>
            <form
              className="form py-2 d-flex flex-column justify-content-center align-items-center pt-4"
              onSubmit={handleSubmit}
            >
              <section className=" w-100">
                <label
                  className="p-1 pb-0 d-flex justify-content-start fs-4"
                  htmlFor="form-name"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="form-name"
                  className="p-2 pb-0 mb-3"
                  required
                  value={name}
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                  placeholder="Name"
                />

                <label
                  htmlFor="email"
                  className="justify-content-start d-flex p-1 pb-0 fs-4 pt-4"
                >
                  Email Address:
                </label>
                <input
                  type="email"
                  id="email"
                  className={`p-2 pb-0 mb-3`}
                  required
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                  value={email}
                  placeholder="Email"
                />

                <br></br>
                <label
                  htmlFor="message"
                  className="justify-content-start d-flex p-1 pb-0 fs-4 pt-4"
                >
                  Message:
                </label>
                <textarea
                  type="text"
                  placeholder="Enter Message..."
                  className="p-3 message-input mt-0"
                  id="message"
                  onChange={handleTextAreaChange}
                  required
                  value={message}
                ></textarea>

                <br></br>
                <section className="d-flex justify-content-center">
                  <button
                    type="submit"
                    className="mt-4 pb-0 fs-5 rounded-4 text-white d-flex flex-column align-items-center justify-content-center"
                  >
                    <p className="p-0 m-0 button-text align-items-center">
                      Send
                    </p>
                  </button>
                </section>
              </section>
            </form>
            <p className="d-flex w-100  justify-content-center pt-3">
              <a href={about.linkedin} target="_blank" rel="noreferrer">
                <img
                  src={require("../icons/linkedin.png")}
                  title="Linkedin - Opens in new tab"
                  alt="linkedin icon"
                  className="m-md-0 p-md-0 pe-md-3 icon pt-2 mt-1"
                />
              </a>
              <a href={about.github} target="_blank" rel="noreferrer">
                <img
                  src={require("../icons/github.png")}
                  title="Github - Opens in new tab"
                  alt="github icon"
                  className="m-md-0 p-md-0 icon pt-2 mt-1"
                />
              </a>
            </p>
          </div>
          <section className="pt-5">
            {messageSubmitted ? (
              <p className="message-submitted">
                Thank you for submitting your message, you will receive a
                confirmation email shortly. I will aim to get back to you within
                two working days.
              </p>
            ) : null}
          </section>
        </div>
      </section>
      {/* <img
        src={require("../avatar/avatar-contact.png")}
        alt="Contact Avatar"
        className="img-fluid avatar"
      />
      <h2 className="pt-5">Contact Information</h2>
      <section className="fs-5  d-flex flex-column align-items-center">
        <section className="w-25 d-flex flex-column align-items-start contact pt-2 p-2">
          <p>Email: {about.email}</p>
          <p>Phone: {about.phone}</p>
          <div className="w-100">
            <p>
              <a href={about.linkedin} target="_blank" rel="noreferrer">
                <img
                  src={require("../icons/linkedin.png")}
                  title="Linkedin - Opens in new tab"
                  alt="linkedin icon"
                  className="m-md-0 p-md-0 pe-md-3 icon pt-2 mt-1"
                />
              </a>
              <a href={about.github} target="_blank" rel="noreferrer">
                <img
                  src={require("../icons/github.png")}
                  title="Github - Opens in new tab"
                  alt="github icon"
                  className="m-md-0 p-md-0 icon pt-2 mt-1"
                />
              </a>
            </p>
          </div>
        </section>
      </section>
      <h2 className="pt-5">Send a Message</h2>
      <section className="d-flex flex-column align-items-center">
        <form
          className="form p-2 d-flex flex-column justify-content-center align-items-center"
          onSubmit={handleSubmit}
        >
          <section className=" w-100">
            <label
              className="p-1 d-flex justify-content-start fs-4"
              htmlFor="form-name"
            >
              Name:
            </label>
            <input type="text" id="form-name" className="p-2 pb-0" />
            <label
              htmlFor="email-input"
              className="justify-content-start d-flex p-1 pb-0 fs-4 pt-3"
            >
              Email Address:
            </label>
            <input
              type="text"
              id="email-input"
              className="p-2 pb-0"
              required
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              value={email}
              placeholder="Email"
            />{" "}
            <br></br>
            <label
              htmlFor="message"
              className="justify-content-start d-flex p-1 pb-0 fs-4 pt-3"
            >
              Message:
            </label>
            <textarea
              type="text"
              placeholder="Enter Message..."
              className="p-3 message-input mt-0"
              id="message"
              onChange={handleTextAreaChange}
              ref={textareaRef}
              style={{
                resize: "vertical",
              }}
              required
              value={message}
            />
            <br></br>
            <section className="d-flex justify-content-center">
              <button type="submit" className="mt-4 pt-2 pb-0 fs-5 rounded-4 ">
                Send
              </button>
            </section>
          </section>
        </form>
        <section className="pt-5 w-50">
          {messageSubmitted ? (
            <p>
              Thank you for submitting your message, you will receive a
              confirmation email shortly. I will aim to get back to you within
              two working days.
            </p>
          ) : null}
        </section>
      </section> */}
    </section>
  ) : (
    <p className="pt-5">Page is Loading...</p>
  );
};
