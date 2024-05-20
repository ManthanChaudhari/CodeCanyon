import { useState } from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Users from "./Components/Users";
import Purchase from "./Components/Purchase";
import SectionPage from "./Components/SectionPage";
import BrowserSupport from "./Components/BrowserSupport";
import FeatureSection from "./Components/FeatureSection";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="bg-[#11101b]">
      <Header />
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
