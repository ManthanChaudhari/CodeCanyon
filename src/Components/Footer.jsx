import React from "react";
import Container from "./Reusable/Container";

function Footer() {
  return (
    <div className="bg-gradient-to-r from-[#F87516]  to-[#5E11FF] w-full py-4">
      <Container>
        <div className="flex flex-col-reverse gap-y-3 lg:flex-row justify-between">
          <div className="text-white text-sm text-center">
            <p> © 2023 Copywrite. All rights reserved by QodeMatrix </p>
          </div>
          <div className="text-gray-300 text-sm flex justify-center gap-x-6">
            <p>Documentation</p>
            <p>Support</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
