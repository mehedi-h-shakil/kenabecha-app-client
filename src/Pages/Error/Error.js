import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <img
        className="h-[850px] w-full"
        src="https://i.ibb.co/qmgdGvH/error-404-concept-illustration-114360-1811.webp"
        alt=""
      />
      <div className="flex justify-center pb-10">
        <Link to="/">
          <button className="btn">Back to HomePage</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
