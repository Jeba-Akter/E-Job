import React from "react";
import { LuShare2 } from "react-icons/lu";
import { IoIosGlobe } from "react-icons/io";

const CompanyCard = ({alljobs}) => {
  return (
    <div className=" grid lg:grid-cols-3 pt-10  xl:grid-cols-4 gap-5 " >
     {alljobs.map((job)=>(
         <div className="card mx-auto bg-base-100 w-72 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src={job.logo}
            alt=""
            className="rounded-xl w-20 " 
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title"></h2>
          <p  className=" font-bold text-xl" >
            {job.name}
          </p>
          <h1>
            {job.industry}
          </h1>
          <div className="flex justify-between gap-10 py-2" >
            <h1>jobs {job.jobs}</h1>
            <h1 className="text-2xl " > < IoIosGlobe /> </h1>
            <h1 className="text-2xl " > <LuShare2 /> </h1>
          </div>
          <div className="card-actions">
            <button className="btn px-16 bg-blue-600 text-white rounded-xl ">see details</button>
          </div>
          .
        </div>
      </div>
     ))}
    </div>
  );
};

export default CompanyCard;
