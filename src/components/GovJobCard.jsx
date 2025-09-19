import React from "react";
import { LuShare2 } from "react-icons/lu";
import { IoIosGlobe } from "react-icons/io";

const GovJobCard = ({alljobs}) => {
  return (
    <div className=" bg-gray-200 grid lg:grid-cols-4 mx-auto pt-10  xl:grid-cols-4 gap-5 " >
     {alljobs.map((job)=>(
         <div className=" mx-auto bg-base-100 w-72 shadow-sm">
        <figure className="px-10 pt-10  ">
          <img
            src={job.logo}
            alt=""
            className="rounded-xl mx-auto  w-20 " 
          />
        </figure>
        <div className="p-4 mx-auto items-center text-center">
          <h2 className="card-title"></h2>
          <p  className=" font-bold text-2xl" >
            {job.name}
          </p>
          <h1 className=" py-2 font-bold text-xl ">
            {job.industry}
          </h1>
          <div className="flex py-2  justify-between " >
            <h1> {job.positions} vacancy</h1>
            <h1 className="text-2xl " > < IoIosGlobe /> </h1>
            <h1 className="text-2xl " > <LuShare2 /> </h1>
          </div>
          <div className="card-actions mt-5 mb-2">
            <button className="btn w-full bg-blue-600 text-white rounded-xl ">see details</button>
          </div>
        </div>
      </div>
     ))}
    </div>
  );
};

export default GovJobCard;



