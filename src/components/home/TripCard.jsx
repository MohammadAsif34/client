import React from "react";
import { Link } from "react-router-dom";

const TripCard = () => {
  return (
    <section className="min-w-[350px] max-w-[400px] h-80 border border-black rounded-xl overflow-hidden flex-1">
      <div className="relative">
        <img
          src="/vite.svg"
          alt=""
          className="w-full h-44 bg-gray-300 object-cover object-center"
        />
        {true && (
          <span className="absolute right-0 bottom-0 px-4 py-1 bg-red-500 text-white">
            Premimum
          </span>
        )}
      </div>
      <div className=" py-3 px-2">
        <h1 className="text-2xl font-semibold">Name</h1>
        <div>
          <span>visa</span>
          <span className="float-end">4.2</span>
        </div>
        <div>
          <span>8 Days</span>
          <span className="float-end">
            $65 <span></span>/p
          </span>
        </div>
      </div>
      <div className="px-2">
        <span>
          <i className="bi bi-check-circle-fill text-green-500 pr-2  "></i>
          <i>Free cancelation</i>
        </span>
        <Link to={"/trip-list"}>
          <span className="px-4 py-1 rounded-full bg-gray-800 text-white float-end">
            Reserve
          </span>
        </Link>
      </div>
    </section>
  );
};

export default TripCard;
