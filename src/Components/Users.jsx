import React from "react";
import image2 from "../assets/motionarteffect-img1.png";
import image1 from "../assets/motionarteffect-img2.png";
import image3 from "../assets/motionarteffect-img3.png";
import RateCard from "./RateCard";
import Container from "./Reusable/Container";

function Users() {
  return (
    <Container>
    <div className="flex flex-col gap-y-10">
     <div className="">
        <h1 className="text-center text-xl font-semibold text-gray-300">Trusted by thousands of users around the world</h1>
     </div>
      <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-3 items-center justify-between gap-x-4">
        <RateCard source={image1} className="lg:justify-start justify-center" />
        <RateCard source={image2} className="lg:justify-center justify-center"/>
        <RateCard source={image3} className="lg:justify-end justify-center"/>
      </div>
      </div>
    </Container>
  );
}

export default Users;
