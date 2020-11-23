import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/landing2/Hero";
import Nr12 from "../sections/landing2/Nr12";
import PMOC from "../sections/landing2/PMOC";
import OnePlace from "../sections/landing2/OnePlace";
import ResponsavelTecnico from "../sections/landing2/ResponsavelTecnico";
import Testimonial from "../sections/landing2/Testimonial";
import CTA from "../sections/landing2/CTA";

const LandingPage2 = () => {
  return (
    <>
      <PageWrapper headerDark>
        <Hero />
        <Nr12 />
        <PMOC />
        <OnePlace />
        <ResponsavelTecnico />
        <Testimonial />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default LandingPage2;
