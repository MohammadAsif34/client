import React from "react";
import OfferCard from "./OfferCard";

const SpecialOffer = () => {
  return (
    <>
      <section className="container m-auto my-4 px-4">
        <div className="">
          <span className="inline-block px-4 py-2 bg-gray-200 rounded-full text-2xl">
            Special Offers
          </span>
          <span className=" inline-block px-4 py-2 float-end hover:bg-gray-200 rounded-full">
            see all<i className="bi bi-arrow-up-right px-2"></i>
          </span>
        </div>
        <div className="relative my-4 ">
          <div className="max-w-min my-5 flex gap-4 overflow-auto transition-all duration-700">
            <OfferCard id="1" />
            <OfferCard id="2" />
            <OfferCard id="3" />
            <OfferCard id="4" />
            <OfferCard id="3" />
            <OfferCard id="3" />
            <OfferCard id="6" />
          </div>
          {/* <Link></Link> */}
          <span className="mx-1 px-3 py-1 bg-red-300 absolute top-11 ">
            Previous
          </span>
          <span className="mx-1 px-3 py-1 bg-red-300 absolute right-0 top-11 ">
            next
          </span>
        </div>
      </section>
    </>
  );
};

export default SpecialOffer;
