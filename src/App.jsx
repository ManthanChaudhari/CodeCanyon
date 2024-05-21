import { useState } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Users from "./Components/Users";
import Purchase from "./Components/Purchase";
import SectionPage from "./Components/SectionPage";
import BrowserSupport from "./Components/BrowserSupport";
import FeatureSection from "./Components/FeatureSection";
import Footer from "./Components/Footer";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CustomCursor from "./Components/CustomCursor";

function App() {
  useGSAP(() => {
    gsap
  })
  return (
    <div className="bg-[#11101b] cursor-default">
      <Header />
      <CustomCursor/>
      <Home />
      <Users />
      <Purchase />
      <SectionPage />
      <BrowserSupport/>
      <FeatureSection/>
      <Footer/>
    </div>
  );
}

export default App;
