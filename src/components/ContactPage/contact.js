import React from "react";
import Title from "../Title";

export default function contact() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="Contact Us" />

          <form
            className="mt-5"
            action="https://formspree.io/francisxavier910@gmail.com"
            method="POST"
          >
            {/* first-Name */}
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                className="form-control"
                placeholder="Fat-Tony"
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Fat-Tony@email.com"
              />
            </div>

            {/* Subject */}
            <div className="form-group">
              <input type="text" name="subject" className="form-control" />
            </div>

            {/* message */}
            <div className="form">
              <textarea
                name="message"
                className="form-control"
                rows="10"
                placeholder="Hello Chum"
              ></textarea>
            </div>

            {/* Submit */}
            <div className="form-group mt-3">
              <input
                type="submit"
                value="send"
                className="form-control text-white bg-primary"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
