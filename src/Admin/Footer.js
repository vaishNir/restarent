import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className=" mt-0">
      <p className="text-center">
        Copyright ©<span>{currentYear}</span> Food Page
      </p>
    </div>
  );
}

export default Footer;
