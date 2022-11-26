import React from "react";
import AdsCard from "./AdsCard";

const Advertise = ({ ads }) => {
  return (
    <div className="my-10 w-9/12 mx-auto">
      <h2 className="text-5xl font-bold py-10">Advertise</h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {ads.map((ad, i) => (
          <AdsCard key={i} ad={ad} />
        ))}
      </div>
    </div>
  );
};

export default Advertise;
