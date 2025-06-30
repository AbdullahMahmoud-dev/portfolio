import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../animation/done.json";
import contactusAnimation from "../../animation/contact us.json";
import "./contact.css";
const Contact = () => {
  const [state, handleSubmit] = useForm("mrbqlbno");

  return (
    <section className="contect">
      <div className="flex ">
        <div className="icon-envelope"></div>
        <h1 className="title">contact us</h1>
      </div>
      <p className="sub-title">
        contact us for more information and get notified when i publish
        something new.
      </p>
      <div style={{ justifyContent: "space-between" }} className="flex">
        <div>
          <form onSubmit={handleSubmit}>
            <div className="flex">
              <label htmlFor="email">Email Address:</label>
              <input
                autoComplete="off"
                required
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="flex">
              <label htmlFor="Message">Your Message:</label>
              <textarea
                required
                name="message"
                id="Message"
                placeholder="Message"
              ></textarea>
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button type="submit" disabled={state.submitting}>
              {state.submitting ? "submitting ..." : "submit"}
            </button>
            {state.succeeded && (
              <div className="flex">
                <Lottie
                  loop={false}
                  style={{ height: 70 }}
                  animationData={doneAnimation}
                />
                <p className="arbsucessfully">
                  your message has been sent successfully
                </p>
              </div>
            )}
          </form>
        </div>

        <div className="animation ">
          <Lottie
            className="contact-animation"
            style={{ height: 300  }}
            animationData={contactusAnimation}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
