import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const FreeCv = () => {
  return (
    <div className=" p-5 bg-gray-100 ">
      {/* this is a left site */}
      {/* section 1 */}
      <div className="w-7/12 h-[500px] overflow-y-scroll space-y-4  font-bold p-5  my-10">
        <div className="  p-10 shadow-2xl bg-white rounded-lg ">
          <h1 className=" pb-5 capitalize text-2xl font-bold">
            parsonal information
          </h1>
          <div className=" capitalize grid grid-cols-1 font-normal lg:grid-cols-2 gap-5">
            <div>
              full name
              <div className="">
                <h2>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="input"
                  />
                </h2>
                
              </div>
            </div>
            <div>
              <h1>mobile namber</h1>
              <div className="">
                <h2>
                  <input type="text" placeholder="Number" className="input" />
                </h2>
              </div>
            </div>
            <div>
              gender
              <select
                defaultValue="Pick a Runtime"
                className="select select-success"
              >
                <option disabled={true}>select a gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <h1>date of birth</h1>
             <div className="h-2" >
               <LocalizationProvider  dateAdapter={AdapterDayjs}>
                <DatePicker className=" h-full w-full" />
              </LocalizationProvider>
             </div>
             
            </div>
            <div>
              <h1>email</h1>
              <div className="">
                <h2>
                  <input
                    type="text"
                    placeholder="Enter Your Email"
                    className="input "
                  />
                </h2>
                
              </div>
            </div>
            <div>
              home address
              <div className="">
                <h2>
                  <input
                    type="text"
                    placeholder="Enter Your Address"
                    className="input"
                  />
                </h2>
                
              </div>
            </div>
          </div>
        </div>
        <div className="my-5 p-10 shadow-2xl rounded-lg bg-white capitalize">
          <h1 className=" capitalize text-2xl font-bold">
            educational qualification
          </h1>
          <div className="pt-8 p-4">
            <button className="btn text-blue-400  ">add more +</button>
          </div>
        </div>
        <div className="my-5 p-10 shadow-2xl rounded-lg bg-white capitalize">
          <h1 className=" capitalize text-2xl font-bold">
            your previos exparience
          </h1>
          <div className="pt-8 p-4">
            <button className="btn text-blue-400  ">add more +</button>
          </div>
        </div>
        <div className="my-10 p-10 shadow-2xl rounded-lg bg-white capitalize">
          <h1 className=" capitalize text-2xl font-bold">
            your extra curricular activities
          </h1>
          <div className="pt-8 p-4">
            <button className="btn text-blue-400  ">add more +</button>
          </div>
        </div>
        <div className="my-10 p-10 shadow-2xl rounded-lg bg-white capitalize">
          <h1 className=" capitalize text-2xl font-bold">your course</h1>
          <div className="pt-8 p-4">
            <button className="btn text-blue-400  ">add more +</button>
          </div>
        </div>
        <div className="my-10 p-10 shadow-2xl rounded-lg bg-white capitalize">
          <h1 className=" capitalize text-2xl font-bold">other skills</h1>
          <h2 className=" text-xl">
            maximum of 5 other skills can be selected
          </h2>
          <div className="pt-8 p-4">
            <button className="btn text-blue-400  ">add more +</button>
          </div>
        </div>
        <div className="my-10 p-10 shadow-2xl rounded-lg bg-white capitalize">
          <h1 className=" capitalize text-2xl font-bold">technical skills</h1>
          <h2 className=" text-xl font-bold">
            maximum of 5 other skills can be selected
          </h2>
          <div className="pt-8 p-4">
            <button className="btn text-blue-400  ">add more +</button>
          </div>
        </div>
        <div className="my-10 p-10 shadow-2xl rounded-lg bg-white capitalize">
          <h1 className=" capitalize text-2xl">hobbies or other activities</h1>
          <h2 className="text-xl">maximum of other skills can be selected</h2>
          <div className="pt-8 p-4">
            <button className="btn text-blue-400  ">add more +</button>
          </div>
        </div>
        <div className="my-10 p-10 shadow-2xl rounded-lg bg-white capitalize">
          <h1 className=" capitalize text-2xl">reference</h1>
          <div className="pt-8 p-4">
            <button className="btn text-blue-400  ">add more +</button>
          </div>
        </div>
        <div className="my-10 p-10 shadow-2xl rounded-lg bg-white capitalize">
          {" "}
          <h1 className=" capitalize text-2xl">career summary</h1>
          <h2>
            <input
              type="text"
              placeholder="career summary"
              className="input pt-5 pb-36 "
               />
              </h2>
        </div>
      </div>

      {/* this is a rite site */}
      <div></div>
    </div>
  );
};

export default FreeCv;
