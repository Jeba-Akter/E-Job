import React from "react";

const CompanyCard = ({alljobs}) => {
  return (
    <div className=" grid lg:grid-cols-3  xl:grid-cols-4 gap-5 " >
     {alljobs.map((job)=>(
         <div className="card border-2 bg-base-100 w-72 shadow-sm">
        <figure className="px-10 pt-10">
          <img
            src={job.logo}
            alt="Shoes"
            className="rounded-xl" 
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
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
     ))}
    </div>
  );
};

export default CompanyCard;
