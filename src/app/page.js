"use client";
import Image from "next/image";
import Navbar from "./components/partials/Navbar";
import SideNavbar from "./components/partials/SideNavbar";
import AboutUs from "./components/modules/AboutUs";
import OurServices from "./components/modules/OurServices";
import OurMissions from "./components/modules/OurMissions";
import Testimonials from "./components/modules/Testimonials";
import LatestNews from "./components/modules/LatestNews";
import OurClients from "./components/modules/OurClients";
import Footer from "./components/partials/Footer";
import HeroSection from "./components/modules/HeroSection";
import { createGlobalStyle } from "styled-components";
import { useRef } from "react";


const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: sans-serif;
  }
`;
export default function Home() {

  const latestNewsRef = useRef(null);

  const scrollToSection = (section) => {
    if (section === "latestNews" && latestNewsRef.current) {
      latestNewsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <>
      <GlobalStyle />
      <main>
        <section className="navbar">
          <Navbar scrollToSection={scrollToSection} />
        </section>
        <section className="h-[100vh]">
          <HeroSection />
        </section>
        <section className="static">
          <AboutUs />
        </section>
        <section>
          <OurServices />
        </section>
        <section>
          <OurMissions />
        </section>
        <section>
          <Testimonials />
        </section>
        <section ref={latestNewsRef}>
          <LatestNews />
        </section>
        <section>
          <OurClients />
        </section>
        {/* <section>
          <Footer />
        </section> */}
        <section className="side-bar hidden sm:block">
          <SideNavbar />
        </section>
      </main>
    </>
  );
}
