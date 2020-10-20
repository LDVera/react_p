import React from "react";
import "../../App.css";
import PresentationSection from "../PresentationSection/";
import SecondSection from "../SecondSection";
import Title from "../Title";
// import Title from '../Title/';

function Home() {
  const Presentacion =
    "I´m a Tecnologico nacional de Mexico in Roque Student, a person focused on the front-end technologyes but that not means that i can not learn some new about other things";

  return (
    <>
      <Title text={Presentacion} />
      <PresentationSection />
      <SecondSection />
    </>
  );
}

export default Home;
