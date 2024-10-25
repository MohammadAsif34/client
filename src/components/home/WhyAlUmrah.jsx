import React from "react";
import TripCard from "./TripCard";

const WhyAlUmrah = () => {
  return (
    <>
      <section className="container m-auto my-4 px-4">
        <h1 className="py-8 text-center text-5xl font-semibold">
          Why Choose Al-Umrah
        </h1>
        <div className="mt-12 flex gap-8">
          <TripCard />
          <TripCard />
          <TripCard />
          <TripCard />
        </div>
      </section>
    </>
  );
};

export default WhyAlUmrah;
