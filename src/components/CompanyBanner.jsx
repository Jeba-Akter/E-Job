import React from 'react';
import { IoSearchOutline } from "react-icons/io5";

const CompanyBanner = () => {
    return (
             <div className="bg-gray-100 pb-20 border-b-2  ">
      <div className=" justify-center h-44 gap-2 text-2xl font-bold flex mx-auto items-center ">
        <h1 className="">find job at your</h1>
        <h1 className="text-blue-600 underline"> desired company</h1>
      </div>
      <div className=" lg:flex  justify-between p-6 mx-10 items-center rounded-xl bg-white ">
        <div className=" w-full flex  items-center ">
          <h1 className=" border-y-2 border-l-2 p-2 text-xl rounded-sm font-bold">
            <IoSearchOutline />
          </h1>
          <input
            type="text"
            placeholder="filter by company"
            className="input w-full "
          />
        </div>
        <div className="divider divider-horizontal h-2 divider-start"></div>
        <input 
          type="text"
          placeholder="filter companis by industry "
          className="input w-full "
        />
      </div>
    </div>
        
    );
};

export default CompanyBanner;

