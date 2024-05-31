import Image from "next/image";
import Navbar from "./components/partials/Navbar";
import SideNavbar from "./components/partials/SideNavbar";

export default function Home() {
  return (
    <main>
      <section className="navbar">
     <Navbar/>
      </section>
      <section className="side-bar">
        <SideNavbar/>
      </section>
    </main>
  );
}
