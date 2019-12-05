import React from "react";
import Hero from "../components/Hero";
import contactBcg from "../images/contactBcg.jpg";
import Contact from "../components/ContactPage/contact";

export default function ContactPage() {
  return (
    <>
      <Hero img={contactBcg} />
      <Contact />
    </>
  );
}
