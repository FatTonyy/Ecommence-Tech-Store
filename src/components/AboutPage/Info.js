import React from "react";
import Title from "../Title";
import aboutBcg from "../../images/aboutBcg.jpg";

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img
              src={aboutBcg}
              className="img-fluid img-thumbnail"
              style={{ background: "var(--darkGrey)" }}
              alt="aboutPage"
            />
          </div>

          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="about us" />
            <p className="text-lead text-muted my-3">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              corporis incidunt dolores culpa pariatur quia facilis dolorum
              reprehenderit quod ut.
            </p>
            <p className="text-lead text-muted my-3">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              corporis incidunt dolores culpa pariatur quia facilis dolorum
              reprehenderit quod ut.
            </p>

            <button
              className="main-link"
              type="button"
              style={{ marginTop: "2rem" }}
            >
              More Info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
