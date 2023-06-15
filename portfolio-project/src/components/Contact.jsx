import React, { useRef, useEffect } from "react";

export const Contact = () => {
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.selectionStart = 0; // Set the cursor position at index 5
      textareaRef.current.selectionEnd = 5; // Set the selection end at index 5
      textareaRef.current.focus(); // Set focus on the textarea
      textareaRef.current.setSelectionRange(5, 5);
    }
  }, []);

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
        <form className="form p-2 d-flex flex-column justify-content-center align-items-center">
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
              ref={textareaRef}
            />
            <br></br>
            <label
              htmlFor="email"
              className="p-1 d-flex justify-content-start fs-4"
            >
              Email Address:
            </label>

            <input type="email" id="email" className="p-2 pb-0" />
            <section className="d-flex justify-content-center">
              <button type="submit" className="mt-4 pt-2 pb-0 fs-5 rounded-4 ">
                Send
              </button>
            </section>
          </section>
        </form>
      </section>
    </section>
  );
};
