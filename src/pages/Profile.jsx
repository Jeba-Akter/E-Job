import React from "react";
import { IoCameraOutline } from "react-icons/io5";
import { AiFillEdit } from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";

const Profile = () => {
  return (
    <div className=" bg-gray-200 w-full border-2 mx-auto p-10 h-screen-full ">
      <div className="w-full h-80 shadow-2xl bg-white    ">
        <img
          className="w-28 py-10  mx-auto items-center flex "
          src="https://sabimages.com/wp-content/uploads/2024/08/hijab-girl-dp-photo20.jpg"
          alt=""
        />
        <div className="flex w-36 gap-2 mx-auto items-center py-2 rounded-lg pl-2 border-2 ">
          <h2 className=" text-xl items-center">
            <IoCameraOutline />
          </h2>
          <h1 className=" text-xl ">uplod img</h1>
        </div>
      </div>
      {/* 2nd section */}
      <div className="  my-10 p-10 w-full  shadow-2xl bg-white">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold capitalize">
            job search information
          </h1>
          <h2>
            <AiFillEdit />
          </h2>
        </div>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          <div className=" capitalize text-16 -">
            <h1 className=" text-slate-600 font-bold py-3">division</h1>
            <h2>rangpur</h2>
            <h3 className=" text-slate-600 font-bold py-3">job type</h3>
            <h4>computer operator</h4>
          </div>
          <div className=" capitalize text-16 font-">
            <h1 className=" text-slate-600 font-bold py-3">area</h1>
            <h2>dinajpur</h2>
            <h3 className=" text-slate-600 font-bold py-3">
              height education and qualification
            </h3>
            <h4>diploma/equivalent</h4>
          </div>
          <div className=" capitalize text-16 font-">
            <h3 className=" text-slate-600 font-bold py-3">work experience</h3>
            <h4>fresher</h4>
          </div>
        </div>
      </div>
      {/* 3rd card */}
      <div className="my-10 p-10 w-full  shadow-2xl bg-white">
        <h1 className=" text-2xl  font-bold">Your cv</h1>
        <div className="">
          <h1 className=" py-2">uploaded cv</h1>
          <div className=" grid grid-cols-1 lg:grid-cols-2 ">
            <div>
              <div className="flex items-center">
                <h2 className=" border-2 py-2 pr-20">cv upload failed</h2>
                <h3 className="text-2xl p-2  border-y-2 border-r-2">
                  <IoMdArrowDropdown />
                </h3>
              </div>
              <h1 className="pt-2">last updated on</h1>
            </div>
            <div>
              <h1 className="py-2">created a cv by sombob job</h1>
              <div className="flex items-center">
                <h2 className=" border-2 py-2 pr-20">cv upload failed</h2>
                <h3 className="text-2xl p-2  border-y-2 border-r-2">
                  <IoMdArrowDropdown />
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 4th section */}
      <div className="  my-10 p-10 w-full  shadow-2xl bg-white">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold capitalize">
            job search information
          </h1>
          <h2>
            <AiFillEdit />
          </h2>
        </div>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          <div className=" capitalize text-16 -">
            <h1 className=" text-slate-600 font-bold py-3">name</h1>
            <h2>jeba katun</h2>
            <h3 className=" text-slate-600 font-bold py-3">email</h3>
            <h4>infojeba218@gmail.com</h4>
          </div>
          <div className=" capitalize text-16 font-">
            <h1 className=" text-slate-600 font-bold py-3">date of birth</h1>
            <h2>25/12/2007</h2>
            <h3 className=" text-slate-600 font-bold py-3">namber</h3>
            <h4>01306038218</h4>
          </div>
          <div className=" capitalize text-16 font-">
            <h3 className=" text-slate-600 font-bold py-3">gender</h3>
            <h4>female</h4>
            <h3 className=" text-slate-600 font-bold py-3">home address</h3>
            <h4>dinajpur</h4>
          </div>
        </div>
      </div>
      {/* 6th section */}
      <div className="  my-10 p-10 w-full  shadow-2xl bg-white">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold capitalize">
            educational qualification
          </h1>
          <h2>
            <AiFillEdit />
          </h2>
        </div>
      </div>
      <div className="  my-10 p-10 w-full  shadow-2xl bg-white">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold capitalize">previous experience</h1>
          <h2>
            <AiFillEdit />
          </h2>
        </div>
      </div>
      <div className="  my-10 p-10 w-full  shadow-2xl bg-white">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold capitalize">your coures</h1>
          <h2>
            <AiFillEdit />
          </h2>
        </div>
      </div>
      <div className="  my-10 p-10 w-full  shadow-2xl bg-white">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold capitalize">others skills</h1>
          <h2>
            <AiFillEdit />
          </h2>
        </div>
      </div>
      <div className="  my-10 p-10 w-full  shadow-2xl bg-white">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold capitalize">referance</h1>
          <h2>
            <AiFillEdit />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Profile;
