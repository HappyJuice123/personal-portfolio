import React, { useState, useEffect, useRef } from "react";

export const Contact = () => {
  const [cursorPosition, setCursorPosition] = useState(0);
  const textareaRef = useRef(null);
  const [messageSubmitted, setMessageSubmitted] = useState(false);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const handleTextAreaChange = (event) => {
    const { selectionStart } = event.target;
    setCursorPosition(selectionStart);

    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    setMessageSubmitted(true);
    event.preventDefault();
    setMessage("");
    setEmail("");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      textareaRef.current.focus();
    }, 10);

    return () => {
      clearTimeout(timer);
    };
  }, [cursorPosition]);

  return (
    <section className="pt-5 pb-5">
      <img
        src={require("../avatar/avatar-contact.png")}
        alt="Contact Avatar"
        className="img-fluid"
      />
      <h2 className="pt-5">Contact Jason</h2>
      <section className="fs-5  d-flex flex-column align-items-center">
        <section className="w-25 d-flex flex-column align-items-start contact pt-2 p-2">
          <p>Email: jasonchan1201@gmail.com</p>
          <p>Phone: 07784364620</p>
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
              htmlFor="message"
              className="justify-content-start d-flex p-1 pb-0 fs-4"
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
            <label
              htmlFor="email"
              className="p-1 d-flex justify-content-start fs-4"
            >
              Email Address:
            </label>

            <input
              type="email"
              id="email"
              className="p-2 pb-0"
              required
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              value={email}
            />
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
      </section>
    </section>
  );
};
