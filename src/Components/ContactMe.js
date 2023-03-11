import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import photo from "./user.png";
import email from "./email.png";
import phone from "./phone-call.png";
function ContactMe() {
  const form = useRef();
  const id = useRef();
  const message = useRef();
  const name = useRef();
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_3a73twc", form.current, "RxNdrQnVy7g2jvoZW")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    name.current.value = "";
    id.current.value = "";
    message.current.value = "";
    console.log(form);
  }
  return (
    <>
      <div id="contact">
        <h1
          className="heading"
          style={{ marginTop: "80px", marginBottom: "10px" }}
        >
          CONTACT ME
        </h1>
        <div style={{ textAlign: "center" }}>
          <div style={{ color: "black", marginBottom: "80px" }}>
            Get In Touch
          </div>
        </div>
        <div style={{ marginTop: "40px" }} className="content">
          <div className="left">
            <div className="details">
              <h3 style={{ fontWeight: "550" }}>Name</h3>

              <h4>
                <img
                  src={photo}
                  style={{
                    height: "20px",
                    width: "20px",
                    display: "inline",
                    marginRight: "10px",
                  }}
                  alt="logo"
                />
                Saksham Bhatnagar
              </h4>
            </div>
            <div className="details">
              <h3 style={{ fontWeight: "550" }}>Email</h3>
              <h4 className="email contents">
                <img
                  src={email}
                  style={{
                    height: "20px",
                    width: "20px",
                    display: "inline",
                    marginRight: "10px",
                  }}
                  alt="logo"
                />
                sakshambhatnagar308@gmail.com
              </h4>
            </div>
            <div className="details">
              <h3 style={{ fontWeight: "550" }}>Phone Number</h3>
              <h4 className="number contents">
                <img
                  src={phone}
                  style={{
                    height: "20px",
                    width: "20px",
                    display: "inline",
                    marginRight: "10px",
                  }}
                  alt="logo"
                />
                8839101483
              </h4>
            </div>
          </div>
          <div className="right">
            <h3>Message Me</h3>
            <form ref={form} onSubmit={sendEmail}>
              <input
                ref={name}
                type="text"
                placeholder="Enter Your Name"
                name="name"
              />

              <input
                ref={id}
                type="email"
                placeholder="Enter Your Email"
                name="email"
              />

              <textarea
                ref={message}
                className="message"
                placeholder="Enter Your Message "
                name="message"
              />
              <input
                className="icon-send"
                style={{
                  margin: "20px",
                  scale: "1.4",
                  width: "75px",
                  height: "30px",
                }}
                type="submit"
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactMe;
