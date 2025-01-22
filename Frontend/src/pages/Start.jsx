import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk-2_PJAEjkhzJBVOYv3Imw_gEC84OSE5E7Q&s)] h-screen pt-8 flex justify-between flex-col w-full">
        <img
          className="w-16 ml-8"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
          alt=""
        />
        <div className="bg-white pb-7 py-5 px-10">
          <h2 className="text-[30px] font-bold">Get started with Uber</h2>
          <Link to="/login" className="flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
