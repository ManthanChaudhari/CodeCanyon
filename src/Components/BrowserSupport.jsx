import React from "react";
import Container from "./Reusable/Container";
import browserImage from "../assets/motionarteffect-img8.png"

function BrowserSupport() {
  return (
    <Container>
      <div className="flex flex-col items-center gap-y-9 bg-[#1b192c] py-14 rounded-3xl shadow-sm shadow-gray-600">
        <div className=" font-sora font-semibold">
          <h1 className="text-lg lg:text-2xl text-center text-white">Supported by All Popular Browsers</h1>
        </div>
        <div className=" lg:w-[500px] px-7">
          <p className="text-lg text-center text-gray-400 leading-7">
            Rest assured, Motion Art is designed to be compatible with all major
            web browsers.
          </p>
        </div>
        <div>
            <img src={browserImage} alt="Browser Support" className=" w-56 lg:w-full"/>
        </div>
      </div>
    </Container>
  );
}

export default BrowserSupport;
