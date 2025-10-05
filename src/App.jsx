import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import Featured from "./components/Featured";
import InfoSection from "./components/InfoSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Categories />
      <Featured />
      <InfoSection />
      <Footer />
    </>
  );
}

export default App;
