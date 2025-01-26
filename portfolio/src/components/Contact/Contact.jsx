import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_p8f3rhc", "template_sgnf2gp", form.current, {
        publicKey: "spaAOHrRg8VqvdH8n",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Email sent");
          e.target.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section id="contact">
      <div className="contactH1">
        <h1>Contact Me</h1>
      </div>

      <form ref={form} onSubmit={sendEmail} className="form">
        {/* <label>Name</label> */}
        <input
          type="text"
          placeholder="Enter your Name"
          name="user_name"
          className="name"
        />
        {/* <label>Email</label> */}
        <input
          type="email"
          placeholder="Enter Your Email"
          name="user_email"
          className="email"
        />
        {/* <label>Message</label> */}
        <textarea
          rows={5}
          name="message"
          placeholder="Enter the Message"
          className="msg"
        />
        <input type="submit" className="button" value="Send" />
      </form>
    </section>
  );
};

export default Contact;
