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

export default function Home() {
  return (
    <main>
      <section className="navbar">
     <Navbar/>
      </section>
      <section>
        <AboutUs/>
      </section>
      <section>
        <OurServices/>
      </section>
      <section>
        <OurMissions/>
      </section>
      <section>
        <Testimonials/>
      </section>
      <section>
        <LatestNews/>
      </section>
      <section>
        <OurClients/>
      </section>
      <section><Footer/></section>
      <section className="side-bar">
        <SideNavbar/>
      </section>
    </main>
  );
}
