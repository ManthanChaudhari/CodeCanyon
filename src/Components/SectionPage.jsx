import React from "react";
import Container from "./Reusable/Container";
import PageCard from "./Reusable/PageCard";
import sectionImage from "../assets/motionarteffect-img11.png";
import pageImage from "../assets/motionarteffect-img10.png";

function SectionPage() {
  return (
    <Container className=" py-24">
      <div className="flex flex-col justify-center items-center gap-y-10">
        <div className="">
          <h1 className="text-center lg:text-4xl font-semibold text-white">
            Apply On Any Section Or Enable For Whole Page
          </h1>
        </div>
        <div className="flex md:flex-row lg:flex-row flex-col lg:h-[700px]">
          <div className="flex justify-center items-start p-2">
            <PageCard
              title="Apply On Section"
              description="Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website. "
              pageSource={sectionImage}
            />
          </div>
          <div className="flex justify-center items-end p-2">
            <PageCard
              title="Apply On Page"
              description="Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation. "
              pageSource={pageImage}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default SectionPage;
