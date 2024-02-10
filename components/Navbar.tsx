import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full max-w-7xl px-6 h-20">
      <div className="flex justify-center items-center gap-5">Forms</div>
      <div className="flex justify-center items-start gap-5">
        <div>New</div>
        <div>Responses</div>
      </div>
    </div>
  );
};

export default Navbar;
