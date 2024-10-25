import React, { useState } from "react";
import OfferCard from "./OfferCard";
import TripCard from "./TripCard";

const CardCarousel = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleCards = () => {
    setShowAll(!showAll);
  };

  return (
    <>
      <section className="container m-auto my-20 px-4 ">
        <div className="">
          <span className="inline-block px-4 py-2 bg-gray-200 rounded-full text-2xl">
            Featured Trips
          </span>
          <span
            className=" inline-block px-4 py-2 float-end hover:bg-gray-200 rounded-full"
            onClick={() => {
              setShowAll(!showAll);
            }}
          >
            {showAll ? "see less" : "see more"}
            <i className="bi bi-arrow-up-right px-2"></i>
          </span>
        </div>
        <div className=" my-5  relative  ">
          <div
            className={`${
              showAll ? "hh-full" : "h-[675px]"
            }  flex  flex-wrap  justify-center gap-8 overflow-hidden`}
          >
            <TripCard />
            <TripCard />
            <TripCard />
            <TripCard />
            <TripCard />
            <TripCard />
            <TripCard />
            <TripCard />
            <TripCard />
            <TripCard />
            <TripCard />
            <TripCard />
            <TripCard />
            <TripCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default CardCarousel;
