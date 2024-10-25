import React from "react";

const TripListCard = () => {
  return (
    <section className=" w-full h-fit p-4 border border-black rounded-lg flex">
      <div className="w-[400px] h-[300px] border border-black rounded-xl">
        <img
          src="/react.svg"
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className=" px-4 flex-1 ">
        <p>
          <i className="bi bi-geo-alt"></i>Location
        </p>
        <h1 className="text-4xl py-3">Trip Name</h1>
        <div>
          <span>
            <i className="bi bi-people-fill px-2"></i>
          </span>
          <i>Trip completed</i>
          <span>
            <i className="bi bi-star-fill px-2"></i>4.5
          </span>
        </div>
        <div className="">
          <span>
            <i className="bi bi-x text-red-500 pr-2"></i>
            <i>Best Price Guarntee</i>
          </span>
          <span>
            <i className="bi bi-check-circle-fill text-green-500 px-2"></i>
            <i>Free cancelation</i>
          </span>
        </div>
      </div>
      <div className="w-[300px] border">
        <p>
          <i className="bi bi-timer"></i> 10 days left
        </p>
        <p>From $500</p>
      </div>
    </section>
  );
};

export default TripListCard;
