import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import doneAnimation from "../../animation/done.json";
import contactusAnimation from "../../animation/contact us.json";
import "./contact.css";

// Contact component using Formspree for form handling
const Contact = () => {
  // Initialize form handling with Formspree
  const [state, handleSubmit] = useForm("mrbqlbno"); // Replace with your actual Formspree ID

  return (
    <section className="contect">
      {/* Section Header */}
      <div className="flex section-header">
        <div className="icon-envelope" />
        <h1 className="title">Contact Us</h1>
      </div>

      {/* Subtitle / Description */}
      <p className="sub-title">
        Contact us for more information and get notified when I publish
        something new.
      </p>

      {/* Main Content Area (Form and Animation) */}
      <div style={{ justifyContent: "space-between" }} className="flex content-wrapper">
        
        {/* Left Side: Contact Form */}
        <div>
          <form onSubmit={handleSubmit}>
            {/* Email Input Field */}
            <div className="flex input-group">
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

            {/* Message Textarea Field */}
            <div className="flex input-group">
              <label htmlFor="Message">Your Message:</label>
              <textarea
                required
                name="message"
                id="Message"
                placeholder="Message"
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            {/* Submit Button */}
            <button type="submit" disabled={state.submitting}>
              {state.submitting ? "Submitting..." : "Submit"}
            </button>
            
            {/* Success Message */}
            {state.succeeded && (
              <div className="flex success-message">
                <Lottie
                  loop={false}
                  style={{ height: 70 }}
                  animationData={doneAnimation}
                />
                <p className="arbsucessfully">
                  Your message has been sent successfully
                </p>
              </div>
            )}
          </form>
        </div>

        {/* Right Side: Contact Animation */}
        <div className="animation">
          <Lottie
            className="contact-animation"
            style={{ height: 300 }}
            animationData={contactusAnimation}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;