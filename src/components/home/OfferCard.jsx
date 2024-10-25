import React from "react";

const OfferCard = (props) => {
  return (
    <div className=" min-w-[350px] max-w-[500px] h-28 p-2 bg-gray-200 border rounded-md shadow-xl flex items-center ">
      <img
        src="/vite.svg"
        alt=""
        className="h-full border-2 border-black rounded-full"
      />
      <div className=" px-5">
        <h1>{props.id}</h1>
        <h1>Last Date Nov 15</h1>
        <p>Extra $200 off on Winter offer</p>
      </div>
    </div>
  );
};
OfferCard.defaultProps = {
  id: 1,
};
export default OfferCard;
