export const Contact = () => {
  return (
    <section className="pt-5 pb-5">
      <img
        src={require("../avatar/avatar-contact.png")}
        alt="Contact Avatar"
        className="img-fluid"
      />
      <h2 className="pt-5">Send a Message</h2>
      <form>
        <label htmlFor="message">Message</label>
        <br></br>
        <textarea
          type="text"
          placeholder="Enter Message..."
          className="p-3 w-25 message-input"
          id="message"
        />
        <br></br>
        <label htmlFor="email" className="p-3">
          Email
        </label>
        <br></br>
        <input type="text" className="mb-3" id="email"></input>
        <br></br>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};
